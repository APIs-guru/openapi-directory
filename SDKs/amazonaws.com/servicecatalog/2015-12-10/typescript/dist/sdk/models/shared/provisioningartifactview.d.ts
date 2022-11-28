import { SpeakeasyBase } from "../../../internal/utils";
import { ProductViewSummary } from "./productviewsummary";
import { ProvisioningArtifact } from "./provisioningartifact";
/**
 * An object that contains summary information about a product view and a provisioning artifact.
**/
export declare class ProvisioningArtifactView extends SpeakeasyBase {
    productViewSummary?: ProductViewSummary;
    provisioningArtifact?: ProvisioningArtifact;
}
