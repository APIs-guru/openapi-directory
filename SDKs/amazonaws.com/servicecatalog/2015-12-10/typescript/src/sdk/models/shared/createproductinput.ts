import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProductTypeEnum } from "./producttypeenum";
import { ProvisioningArtifactProperties } from "./provisioningartifactproperties";
import { Tag } from "./tag";


export class CreateProductInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Distributor" })
  distributor?: string;

  @Metadata({ data: "json, name=IdempotencyToken" })
  idempotencyToken: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Owner" })
  owner: string;

  @Metadata({ data: "json, name=ProductType" })
  productType: ProductTypeEnum;

  @Metadata({ data: "json, name=ProvisioningArtifactParameters" })
  provisioningArtifactParameters: ProvisioningArtifactProperties;

  @Metadata({ data: "json, name=SupportDescription" })
  supportDescription?: string;

  @Metadata({ data: "json, name=SupportEmail" })
  supportEmail?: string;

  @Metadata({ data: "json, name=SupportUrl" })
  supportUrl?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
