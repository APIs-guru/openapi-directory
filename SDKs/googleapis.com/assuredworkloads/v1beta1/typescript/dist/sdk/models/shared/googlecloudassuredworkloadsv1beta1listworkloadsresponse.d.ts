import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssuredworkloadsV1beta1Workload } from "./googlecloudassuredworkloadsv1beta1workload";
/**
 * Response of ListWorkloads endpoint.
**/
export declare class GoogleCloudAssuredworkloadsV1beta1ListWorkloadsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    workloads?: GoogleCloudAssuredworkloadsV1beta1Workload[];
}
