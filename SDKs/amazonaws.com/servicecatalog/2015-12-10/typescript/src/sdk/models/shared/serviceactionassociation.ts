import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceActionAssociation
/** 
 * A self-service action association consisting of the Action ID, the Product ID, and the Provisioning Artifact ID.
**/
export class ServiceActionAssociation extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProductId" })
  productId: string;

  @Metadata({ data: "json, name=ProvisioningArtifactId" })
  provisioningArtifactId: string;

  @Metadata({ data: "json, name=ServiceActionId" })
  serviceActionId: string;
}
