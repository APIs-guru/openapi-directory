import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisassociateServiceActionFromProvisioningArtifactInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=ProductId" })
  productId: string;

  @Metadata({ data: "json, name=ProvisioningArtifactId" })
  provisioningArtifactId: string;

  @Metadata({ data: "json, name=ServiceActionId" })
  serviceActionId: string;
}
