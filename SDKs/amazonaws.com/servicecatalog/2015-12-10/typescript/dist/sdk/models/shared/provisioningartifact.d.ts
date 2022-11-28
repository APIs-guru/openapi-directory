import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningArtifactGuidanceEnum } from "./provisioningartifactguidanceenum";
/**
 * Information about a provisioning artifact. A provisioning artifact is also known as a product version.
**/
export declare class ProvisioningArtifact extends SpeakeasyBase {
    createdTime?: Date;
    description?: string;
    guidance?: ProvisioningArtifactGuidanceEnum;
    id?: string;
    name?: string;
}
