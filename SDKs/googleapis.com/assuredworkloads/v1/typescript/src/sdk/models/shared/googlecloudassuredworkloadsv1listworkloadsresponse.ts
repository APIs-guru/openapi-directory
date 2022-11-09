import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudAssuredworkloadsV1Workload } from "./googlecloudassuredworkloadsv1workload";


// GoogleCloudAssuredworkloadsV1ListWorkloadsResponse
/** 
 * Response of ListWorkloads endpoint.
**/
export class GoogleCloudAssuredworkloadsV1ListWorkloadsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=workloads", elemType: shared.GoogleCloudAssuredworkloadsV1Workload })
  workloads?: GoogleCloudAssuredworkloadsV1Workload[];
}
