import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudAssuredworkloadsV1Violation } from "./googlecloudassuredworkloadsv1violation";


// GoogleCloudAssuredworkloadsV1ListViolationsResponse
/** 
 * Response of ListViolations endpoint.
**/
export class GoogleCloudAssuredworkloadsV1ListViolationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=violations", elemType: shared.GoogleCloudAssuredworkloadsV1Violation })
  violations?: GoogleCloudAssuredworkloadsV1Violation[];
}
