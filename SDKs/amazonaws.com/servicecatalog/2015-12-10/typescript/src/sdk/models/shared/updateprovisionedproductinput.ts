import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UpdateProvisioningParameter } from "./updateprovisioningparameter";
import { UpdateProvisioningPreferences } from "./updateprovisioningpreferences";
import { Tag } from "./tag";



export class UpdateProvisionedProductInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=PathId" })
  pathId?: string;

  @SpeakeasyMetadata({ data: "json, name=PathName" })
  pathName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductName" })
  productName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedProductId" })
  provisionedProductId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedProductName" })
  provisionedProductName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningArtifactId" })
  provisioningArtifactId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningArtifactName" })
  provisioningArtifactName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningParameters", elemType: UpdateProvisioningParameter })
  provisioningParameters?: UpdateProvisioningParameter[];

  @SpeakeasyMetadata({ data: "json, name=ProvisioningPreferences" })
  provisioningPreferences?: UpdateProvisioningPreferences;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=UpdateToken" })
  updateToken: string;
}
