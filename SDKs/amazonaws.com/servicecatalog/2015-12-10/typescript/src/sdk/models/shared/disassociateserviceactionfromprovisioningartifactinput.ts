import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisassociateServiceActionFromProvisioningArtifactInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductId" })
  productId: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningArtifactId" })
  provisioningArtifactId: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceActionId" })
  serviceActionId: string;
}
