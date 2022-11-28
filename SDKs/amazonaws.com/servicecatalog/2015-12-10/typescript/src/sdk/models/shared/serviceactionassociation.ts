import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceActionAssociation
/** 
 * A self-service action association consisting of the Action ID, the Product ID, and the Provisioning Artifact ID.
**/
export class ServiceActionAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProductId" })
  productId: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningArtifactId" })
  provisioningArtifactId: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceActionId" })
  serviceActionId: string;
}
