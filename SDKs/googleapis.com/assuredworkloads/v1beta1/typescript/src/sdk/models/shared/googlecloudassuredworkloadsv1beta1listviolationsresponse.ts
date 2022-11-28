import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssuredworkloadsV1beta1Violation } from "./googlecloudassuredworkloadsv1beta1violation";



// GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse
/** 
 * Response of ListViolations endpoint.
**/
export class GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=violations", elemType: GoogleCloudAssuredworkloadsV1beta1Violation })
  violations?: GoogleCloudAssuredworkloadsV1beta1Violation[];
}
