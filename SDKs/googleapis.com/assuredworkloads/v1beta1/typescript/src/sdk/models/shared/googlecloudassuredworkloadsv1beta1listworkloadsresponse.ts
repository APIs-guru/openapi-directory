import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudAssuredworkloadsV1beta1Workload } from "./googlecloudassuredworkloadsv1beta1workload";


// GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse
/** 
 * Response of ListWorkloads endpoint.
**/
export class GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=workloads", elemType: shared.GoogleCloudAssuredworkloadsV1beta1Workload })
  workloads?: GoogleCloudAssuredworkloadsV1beta1Workload[];
}
