import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProductViewSummary } from "./productviewsummary";
import { ProvisioningArtifact } from "./provisioningartifact";


// ProvisioningArtifactView
/** 
 * An object that contains summary information about a product view and a provisioning artifact.
**/
export class ProvisioningArtifactView extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProductViewSummary" })
  productViewSummary?: ProductViewSummary;

  @Metadata({ data: "json, name=ProvisioningArtifact" })
  provisioningArtifact?: ProvisioningArtifact;
}
