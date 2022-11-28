import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningArtifactGuidanceEnum } from "./provisioningartifactguidanceenum";
import { ProvisioningArtifactTypeEnum } from "./provisioningartifacttypeenum";
/**
 * Information about a provisioning artifact (also known as a version) for a product.
**/
export declare class ProvisioningArtifactDetail extends SpeakeasyBase {
    active?: boolean;
    createdTime?: Date;
    description?: string;
    guidance?: ProvisioningArtifactGuidanceEnum;
    id?: string;
    name?: string;
    type?: ProvisioningArtifactTypeEnum;
}
