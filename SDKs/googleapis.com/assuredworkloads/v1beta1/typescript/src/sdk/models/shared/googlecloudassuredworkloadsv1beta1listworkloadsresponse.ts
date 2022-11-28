import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssuredworkloadsV1beta1Workload } from "./googlecloudassuredworkloadsv1beta1workload";



// GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse
/** 
 * Response of ListWorkloads endpoint.
**/
export class GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=workloads", elemType: GoogleCloudAssuredworkloadsV1beta1Workload })
  workloads?: GoogleCloudAssuredworkloadsV1beta1Workload[];
}
