import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudAssuredworkloadsV1Workload } from "./googlecloudassuredworkloadsv1workload";
/**
 * Response of ListWorkloads endpoint.
**/
export declare class GoogleCloudAssuredworkloadsV1ListWorkloadsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    workloads?: GoogleCloudAssuredworkloadsV1Workload[];
}
