import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SettingTypeEnum } from "./settingtypeenum";



export class SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganizationLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=members" })
  members?: string;

  @SpeakeasyMetadata({ data: "json, name=products" })
  products?: string;
}


export class SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganizationLinks;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=organizationId" })
  organizationId?: string;
}


export class SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbedded extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganization;
}


export class SettingModelHaljsonEmbeddedTagsEmbeddedProductLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configs" })
  configs?: string;

  @SpeakeasyMetadata({ data: "json, name=environments" })
  environments?: string;

  @SpeakeasyMetadata({ data: "json, name=members" })
  members?: string;

  @SpeakeasyMetadata({ data: "json, name=permission-groups" })
  permissionGroups?: string;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string;
}


export class SettingModelHaljsonEmbeddedTagsEmbeddedProduct extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_embedded" })
  embedded?: SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbedded;

  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: SettingModelHaljsonEmbeddedTagsEmbeddedProductLinks;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;
}


export class SettingModelHaljsonEmbeddedTagsEmbedded extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: SettingModelHaljsonEmbeddedTagsEmbeddedProduct;
}


export class SettingModelHaljsonEmbeddedTagsLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: string;
}


export class SettingModelHaljsonEmbeddedTags extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_embedded" })
  embedded?: SettingModelHaljsonEmbeddedTagsEmbedded;

  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: SettingModelHaljsonEmbeddedTagsLinks;

  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=tagId" })
  tagId?: number;
}


export class SettingModelHaljsonEmbedded extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tags", elemType: SettingModelHaljsonEmbeddedTags })
  tags?: SettingModelHaljsonEmbeddedTags[];
}


export class SettingModelHaljsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: string;
}


export class SettingModelHaljson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_embedded" })
  embedded?: SettingModelHaljsonEmbedded;

  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: SettingModelHaljsonLinks;

  @SpeakeasyMetadata({ data: "json, name=configId" })
  configId?: string;

  @SpeakeasyMetadata({ data: "json, name=configName" })
  configName?: string;

  @SpeakeasyMetadata({ data: "json, name=expirationWarningAt" })
  expirationWarningAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=hint" })
  hint?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerUserEmail" })
  ownerUserEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerUserFullName" })
  ownerUserFullName?: string;

  @SpeakeasyMetadata({ data: "json, name=settingId" })
  settingId?: number;

  @SpeakeasyMetadata({ data: "json, name=settingType" })
  settingType?: SettingTypeEnum;
}
