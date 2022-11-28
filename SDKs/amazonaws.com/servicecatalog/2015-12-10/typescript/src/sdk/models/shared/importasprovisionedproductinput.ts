import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImportAsProvisionedProductInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken: string;

  @SpeakeasyMetadata({ data: "json, name=PhysicalId" })
  physicalId: string;

  @SpeakeasyMetadata({ data: "json, name=ProductId" })
  productId: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedProductName" })
  provisionedProductName: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningArtifactId" })
  provisioningArtifactId: string;
}
