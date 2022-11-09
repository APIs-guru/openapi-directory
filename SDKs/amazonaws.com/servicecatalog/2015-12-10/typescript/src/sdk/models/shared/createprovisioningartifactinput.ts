import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisioningArtifactProperties } from "./provisioningartifactproperties";


export class CreateProvisioningArtifactInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken: string;

  @Metadata({ data: "json, name=Parameters" })
  parameters: ProvisioningArtifactProperties;

  @Metadata({ data: "json, name=ProductId" })
  productId: string;
}
