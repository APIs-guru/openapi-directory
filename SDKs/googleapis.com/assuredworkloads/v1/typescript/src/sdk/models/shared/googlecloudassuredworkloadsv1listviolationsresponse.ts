import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssuredworkloadsV1Violation } from "./googlecloudassuredworkloadsv1violation";



// GoogleCloudAssuredworkloadsV1ListViolationsResponse
/** 
 * Response of ListViolations endpoint.
**/
export class GoogleCloudAssuredworkloadsV1ListViolationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=violations", elemType: GoogleCloudAssuredworkloadsV1Violation })
  violations?: GoogleCloudAssuredworkloadsV1Violation[];
}
