import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductTypeEnum } from "./producttypeenum";
import { ProvisioningArtifactProperties } from "./provisioningartifactproperties";
import { Tag } from "./tag";



export class CreateProductInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Distributor" })
  distributor?: string;

  @SpeakeasyMetadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "json, name=ProductType" })
  productType: ProductTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningArtifactParameters" })
  provisioningArtifactParameters: ProvisioningArtifactProperties;

  @SpeakeasyMetadata({ data: "json, name=SupportDescription" })
  supportDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=SupportEmail" })
  supportEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=SupportUrl" })
  supportUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
