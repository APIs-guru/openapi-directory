import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningEnum } from "./provisioningenum";
/**
 * The service template summary data.
**/
export declare class ServiceTemplateSummary extends SpeakeasyBase {
    arn: string;
    createdAt: Date;
    description?: string;
    displayName?: string;
    lastModifiedAt: Date;
    name: string;
    pipelineProvisioning?: ProvisioningEnum;
    recommendedVersion?: string;
}
