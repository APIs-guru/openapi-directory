import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningParameter } from "./provisioningparameter";
import { ProvisioningPreferences } from "./provisioningpreferences";
import { Tag } from "./tag";



export class ProvisionProductInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=NotificationArns" })
  notificationArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=PathId" })
  pathId?: string;

  @SpeakeasyMetadata({ data: "json, name=PathName" })
  pathName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductName" })
  productName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionToken" })
  provisionToken: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisionedProductName" })
  provisionedProductName: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningArtifactId" })
  provisioningArtifactId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningArtifactName" })
  provisioningArtifactName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningParameters", elemType: ProvisioningParameter })
  provisioningParameters?: ProvisioningParameter[];

  @SpeakeasyMetadata({ data: "json, name=ProvisioningPreferences" })
  provisioningPreferences?: ProvisioningPreferences;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
