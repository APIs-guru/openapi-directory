import { SpeakeasyBase } from "../../../internal/utils";
import { CompletionEstimation } from "./completionestimation";
import { ProvisioningJobStatusEnum } from "./provisioningjobstatusenum";
export declare class ProvisioningJobInfo extends SpeakeasyBase {
    completion?: CompletionEstimation;
    id?: string;
    status?: ProvisioningJobStatusEnum;
}
