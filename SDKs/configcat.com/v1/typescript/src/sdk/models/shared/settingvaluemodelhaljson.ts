import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IntegrationLinkTypeEnum } from "./integrationlinktypeenum";
import { SettingTypeEnum } from "./settingtypeenum";
import { RolloutPercentageItemModel } from "./rolloutpercentageitemmodel";
import { RolloutRuleModel } from "./rolloutrulemodel";



export class SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganizationLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=members" })
  members?: string;

  @SpeakeasyMetadata({ data: "json, name=products" })
  products?: string;
}


export class SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganizationLinks;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=organizationId" })
  organizationId?: string;
}


export class SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbedded extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganization;
}


export class SettingValueModelHaljsonEmbeddedConfigEmbeddedProductLinks extends SpeakeasyBase {
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


export class SettingValueModelHaljsonEmbeddedConfigEmbeddedProduct extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_embedded" })
  embedded?: SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbedded;

  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: SettingValueModelHaljsonEmbeddedConfigEmbeddedProductLinks;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;
}


export class SettingValueModelHaljsonEmbeddedConfigEmbedded extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: SettingValueModelHaljsonEmbeddedConfigEmbeddedProduct;
}


export class SettingValueModelHaljsonEmbeddedConfigLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: string;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: string;
}


export class SettingValueModelHaljsonEmbeddedConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_embedded" })
  embedded?: SettingValueModelHaljsonEmbeddedConfigEmbedded;

  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: SettingValueModelHaljsonEmbeddedConfigLinks;

  @SpeakeasyMetadata({ data: "json, name=configId" })
  configId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganizationLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=members" })
  members?: string;

  @SpeakeasyMetadata({ data: "json, name=products" })
  products?: string;
}


export class SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganizationLinks;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=organizationId" })
  organizationId?: string;
}


export class SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbedded extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganization;
}


export class SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks extends SpeakeasyBase {
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


export class SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProduct extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_embedded" })
  embedded?: SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbedded;

  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;
}


export class SettingValueModelHaljsonEmbeddedEnvironmentEmbedded extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProduct;
}


export class SettingValueModelHaljsonEmbeddedEnvironmentLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: string;
}


export class SettingValueModelHaljsonEmbeddedEnvironment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_embedded" })
  embedded?: SettingValueModelHaljsonEmbeddedEnvironmentEmbedded;

  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: SettingValueModelHaljsonEmbeddedEnvironmentLinks;

  @SpeakeasyMetadata({ data: "json, name=environmentId" })
  environmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class SettingValueModelHaljsonEmbeddedIntegrationLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=integrationLinkType" })
  integrationLinkType?: IntegrationLinkTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class SettingValueModelHaljsonEmbeddedSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=creatorEmail" })
  creatorEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=creatorFullName" })
  creatorFullName?: string;

  @SpeakeasyMetadata({ data: "json, name=expirationWarningAt" })
  expirationWarningAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=hint" })
  hint?: string;

  @SpeakeasyMetadata({ data: "json, name=isWatching" })
  isWatching?: boolean;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerEmail" })
  ownerEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerFullName" })
  ownerFullName?: string;

  @SpeakeasyMetadata({ data: "json, name=settingId" })
  settingId?: number;

  @SpeakeasyMetadata({ data: "json, name=settingType" })
  settingType?: SettingTypeEnum;
}


export class SettingValueModelHaljsonEmbeddedSettingTags extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=settingTagId" })
  settingTagId?: number;

  @SpeakeasyMetadata({ data: "json, name=tagId" })
  tagId?: number;
}


export class SettingValueModelHaljsonEmbedded extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: SettingValueModelHaljsonEmbeddedConfig;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: SettingValueModelHaljsonEmbeddedEnvironment;

  @SpeakeasyMetadata({ data: "json, name=integrationLinks", elemType: SettingValueModelHaljsonEmbeddedIntegrationLinks })
  integrationLinks?: SettingValueModelHaljsonEmbeddedIntegrationLinks[];

  @SpeakeasyMetadata({ data: "json, name=setting" })
  setting?: SettingValueModelHaljsonEmbeddedSetting;

  @SpeakeasyMetadata({ data: "json, name=settingTags", elemType: SettingValueModelHaljsonEmbeddedSettingTags })
  settingTags?: SettingValueModelHaljsonEmbeddedSettingTags[];
}


export class SettingValueModelHaljsonLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: string;
}


export class SettingValueModelHaljson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_embedded" })
  embedded?: SettingValueModelHaljsonEmbedded;

  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: SettingValueModelHaljsonLinks;

  @SpeakeasyMetadata({ data: "json, name=lastUpdaterUserEmail" })
  lastUpdaterUserEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdaterUserFullName" })
  lastUpdaterUserFullName?: string;

  @SpeakeasyMetadata({ data: "json, name=readOnly" })
  readOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rolloutPercentageItems", elemType: RolloutPercentageItemModel })
  rolloutPercentageItems?: RolloutPercentageItemModel[];

  @SpeakeasyMetadata({ data: "json, name=rolloutRules", elemType: RolloutRuleModel })
  rolloutRules?: RolloutRuleModel[];

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Map<string, any>;
}
