import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Summary information about a provisioning artifact (also known as a version) for a product.
**/
export declare class ProvisioningArtifactSummary extends SpeakeasyBase {
    createdTime?: Date;
    description?: string;
    id?: string;
    name?: string;
    provisioningArtifactMetadata?: Map<string, string>;
}
