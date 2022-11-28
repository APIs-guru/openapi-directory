import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningEnum } from "./provisioningenum";
/**
 * The environment template data.
**/
export declare class EnvironmentTemplateSummary extends SpeakeasyBase {
    arn: string;
    createdAt: Date;
    description?: string;
    displayName?: string;
    lastModifiedAt: Date;
    name: string;
    provisioning?: ProvisioningEnum;
    recommendedVersion?: string;
}
