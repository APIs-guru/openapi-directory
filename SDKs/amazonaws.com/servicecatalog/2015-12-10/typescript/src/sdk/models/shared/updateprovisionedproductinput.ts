import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UpdateProvisioningParameter } from "./updateprovisioningparameter";
import { UpdateProvisioningPreferences } from "./updateprovisioningpreferences";
import { Tag } from "./tag";


export class UpdateProvisionedProductInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=PathId" })
  pathId?: string;

  @Metadata({ data: "json, name=PathName" })
  pathName?: string;

  @Metadata({ data: "json, name=ProductId" })
  productId?: string;

  @Metadata({ data: "json, name=ProductName" })
  productName?: string;

  @Metadata({ data: "json, name=ProvisionedProductId" })
  provisionedProductId?: string;

  @Metadata({ data: "json, name=ProvisionedProductName" })
  provisionedProductName?: string;

  @Metadata({ data: "json, name=ProvisioningArtifactId" })
  provisioningArtifactId?: string;

  @Metadata({ data: "json, name=ProvisioningArtifactName" })
  provisioningArtifactName?: string;

  @Metadata({ data: "json, name=ProvisioningParameters", elemType: shared.UpdateProvisioningParameter })
  provisioningParameters?: UpdateProvisioningParameter[];

  @Metadata({ data: "json, name=ProvisioningPreferences" })
  provisioningPreferences?: UpdateProvisioningPreferences;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=UpdateToken" })
  updateToken: string;
}
