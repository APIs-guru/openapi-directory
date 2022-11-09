import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SettingTypeEnum } from "./settingtypeenum";


export class SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganizationLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=members" })
  members?: string;

  @Metadata({ data: "json, name=products" })
  products?: string;
}


export class SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganization extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links?: SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganizationLinks;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=organizationId" })
  organizationId?: string;
}


export class SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbedded extends SpeakeasyBase {
  @Metadata({ data: "json, name=organization" })
  organization?: SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganization;
}


export class SettingModelHaljsonEmbeddedTagsEmbeddedProductLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=configs" })
  configs?: string;

  @Metadata({ data: "json, name=environments" })
  environments?: string;

  @Metadata({ data: "json, name=members" })
  members?: string;

  @Metadata({ data: "json, name=permission-groups" })
  permissionGroups?: string;

  @Metadata({ data: "json, name=self" })
  self?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string;
}


export class SettingModelHaljsonEmbeddedTagsEmbeddedProduct extends SpeakeasyBase {
  @Metadata({ data: "json, name=_embedded" })
  embedded?: SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbedded;

  @Metadata({ data: "json, name=_links" })
  links?: SettingModelHaljsonEmbeddedTagsEmbeddedProductLinks;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=productId" })
  productId?: string;
}


export class SettingModelHaljsonEmbeddedTagsEmbedded extends SpeakeasyBase {
  @Metadata({ data: "json, name=product" })
  product?: SettingModelHaljsonEmbeddedTagsEmbeddedProduct;
}


export class SettingModelHaljsonEmbeddedTagsLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self?: string;
}


export class SettingModelHaljsonEmbeddedTags extends SpeakeasyBase {
  @Metadata({ data: "json, name=_embedded" })
  embedded?: SettingModelHaljsonEmbeddedTagsEmbedded;

  @Metadata({ data: "json, name=_links" })
  links?: SettingModelHaljsonEmbeddedTagsLinks;

  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=tagId" })
  tagId?: number;
}


export class SettingModelHaljsonEmbedded extends SpeakeasyBase {
  @Metadata({ data: "json, name=tags", elemType: shared.SettingModelHaljsonEmbeddedTags })
  tags?: SettingModelHaljsonEmbeddedTags[];
}


export class SettingModelHaljsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self?: string;
}


export class SettingModelHaljson extends SpeakeasyBase {
  @Metadata({ data: "json, name=_embedded" })
  embedded?: SettingModelHaljsonEmbedded;

  @Metadata({ data: "json, name=_links" })
  links?: SettingModelHaljsonLinks;

  @Metadata({ data: "json, name=configId" })
  configId?: string;

  @Metadata({ data: "json, name=configName" })
  configName?: string;

  @Metadata({ data: "json, name=expirationWarningAt" })
  expirationWarningAt?: Date;

  @Metadata({ data: "json, name=hint" })
  hint?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ownerUserEmail" })
  ownerUserEmail?: string;

  @Metadata({ data: "json, name=ownerUserFullName" })
  ownerUserFullName?: string;

  @Metadata({ data: "json, name=settingId" })
  settingId?: number;

  @Metadata({ data: "json, name=settingType" })
  settingType?: SettingTypeEnum;
}
