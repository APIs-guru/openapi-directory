import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningArtifactProperties } from "./provisioningartifactproperties";



export class CreateProvisioningArtifactInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken: string;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters: ProvisioningArtifactProperties;

  @SpeakeasyMetadata({ data: "json, name=ProductId" })
  productId: string;
}
