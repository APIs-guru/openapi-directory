import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProvisioningParameter } from "./provisioningparameter";
import { ProvisioningPreferences } from "./provisioningpreferences";
import { Tag } from "./tag";


export class ProvisionProductInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=AcceptLanguage" })
  acceptLanguage?: string;

  @Metadata({ data: "json, name=NotificationArns" })
  notificationArns?: string[];

  @Metadata({ data: "json, name=PathId" })
  pathId?: string;

  @Metadata({ data: "json, name=PathName" })
  pathName?: string;

  @Metadata({ data: "json, name=ProductId" })
  productId?: string;

  @Metadata({ data: "json, name=ProductName" })
  productName?: string;

  @Metadata({ data: "json, name=ProvisionToken" })
  provisionToken: string;

  @Metadata({ data: "json, name=ProvisionedProductName" })
  provisionedProductName: string;

  @Metadata({ data: "json, name=ProvisioningArtifactId" })
  provisioningArtifactId?: string;

  @Metadata({ data: "json, name=ProvisioningArtifactName" })
  provisioningArtifactName?: string;

  @Metadata({ data: "json, name=ProvisioningParameters", elemType: shared.ProvisioningParameter })
  provisioningParameters?: ProvisioningParameter[];

  @Metadata({ data: "json, name=ProvisioningPreferences" })
  provisioningPreferences?: ProvisioningPreferences;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
