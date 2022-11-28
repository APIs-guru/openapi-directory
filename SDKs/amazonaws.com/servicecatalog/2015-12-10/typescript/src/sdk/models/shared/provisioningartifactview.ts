import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductViewSummary } from "./productviewsummary";
import { ProvisioningArtifact } from "./provisioningartifact";



// ProvisioningArtifactView
/** 
 * An object that contains summary information about a product view and a provisioning artifact.
**/
export class ProvisioningArtifactView extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProductViewSummary" })
  productViewSummary?: ProductViewSummary;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningArtifact" })
  provisioningArtifact?: ProvisioningArtifact;
}
