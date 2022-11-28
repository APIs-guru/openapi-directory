import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssuredworkloadsV1Workload } from "./googlecloudassuredworkloadsv1workload";



// GoogleCloudAssuredworkloadsV1ListWorkloadsResponse
/** 
 * Response of ListWorkloads endpoint.
**/
export class GoogleCloudAssuredworkloadsV1ListWorkloadsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=workloads", elemType: GoogleCloudAssuredworkloadsV1Workload })
  workloads?: GoogleCloudAssuredworkloadsV1Workload[];
}
