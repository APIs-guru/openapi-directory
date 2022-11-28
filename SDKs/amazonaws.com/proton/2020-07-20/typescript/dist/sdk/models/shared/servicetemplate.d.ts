import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningEnum } from "./provisioningenum";
/**
 * The service template detail data.
**/
export declare class ServiceTemplate extends SpeakeasyBase {
    arn: string;
    createdAt: Date;
    description?: string;
    displayName?: string;
    encryptionKey?: string;
    lastModifiedAt: Date;
    name: string;
    pipelineProvisioning?: ProvisioningEnum;
    recommendedVersion?: string;
}
