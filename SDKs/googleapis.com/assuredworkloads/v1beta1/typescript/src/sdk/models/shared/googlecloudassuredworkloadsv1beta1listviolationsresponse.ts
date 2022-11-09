import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudAssuredworkloadsV1beta1Violation } from "./googlecloudassuredworkloadsv1beta1violation";


// GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse
/** 
 * Response of ListViolations endpoint.
**/
export class GoogleCloudAssuredworkloadsV1beta1ListViolationsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=violations", elemType: shared.GoogleCloudAssuredworkloadsV1beta1Violation })
  violations?: GoogleCloudAssuredworkloadsV1beta1Violation[];
}
