import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IntegrationLinkTypeEnum } from "./integrationlinktypeenum";
import { SettingTypeEnum } from "./settingtypeenum";
import { RolloutPercentageItemModel } from "./rolloutpercentageitemmodel";
import { RolloutRuleModel } from "./rolloutrulemodel";


export class SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganizationLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=members" })
  members?: string;

  @Metadata({ data: "json, name=products" })
  products?: string;
}


export class SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganization extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links?: SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganizationLinks;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=organizationId" })
  organizationId?: string;
}


export class SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbedded extends SpeakeasyBase {
  @Metadata({ data: "json, name=organization" })
  organization?: SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbeddedOrganization;
}


export class SettingValueModelHaljsonEmbeddedConfigEmbeddedProductLinks extends SpeakeasyBase {
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


export class SettingValueModelHaljsonEmbeddedConfigEmbeddedProduct extends SpeakeasyBase {
  @Metadata({ data: "json, name=_embedded" })
  embedded?: SettingValueModelHaljsonEmbeddedConfigEmbeddedProductEmbedded;

  @Metadata({ data: "json, name=_links" })
  links?: SettingValueModelHaljsonEmbeddedConfigEmbeddedProductLinks;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=productId" })
  productId?: string;
}


export class SettingValueModelHaljsonEmbeddedConfigEmbedded extends SpeakeasyBase {
  @Metadata({ data: "json, name=product" })
  product?: SettingValueModelHaljsonEmbeddedConfigEmbeddedProduct;
}


export class SettingValueModelHaljsonEmbeddedConfigLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self?: string;

  @Metadata({ data: "json, name=settings" })
  settings?: string;
}


export class SettingValueModelHaljsonEmbeddedConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=_embedded" })
  embedded?: SettingValueModelHaljsonEmbeddedConfigEmbedded;

  @Metadata({ data: "json, name=_links" })
  links?: SettingValueModelHaljsonEmbeddedConfigLinks;

  @Metadata({ data: "json, name=configId" })
  configId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganizationLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=members" })
  members?: string;

  @Metadata({ data: "json, name=products" })
  products?: string;
}


export class SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganization extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links?: SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganizationLinks;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=organizationId" })
  organizationId?: string;
}


export class SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbedded extends SpeakeasyBase {
  @Metadata({ data: "json, name=organization" })
  organization?: SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbeddedOrganization;
}


export class SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks extends SpeakeasyBase {
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


export class SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProduct extends SpeakeasyBase {
  @Metadata({ data: "json, name=_embedded" })
  embedded?: SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductEmbedded;

  @Metadata({ data: "json, name=_links" })
  links?: SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProductLinks;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=productId" })
  productId?: string;
}


export class SettingValueModelHaljsonEmbeddedEnvironmentEmbedded extends SpeakeasyBase {
  @Metadata({ data: "json, name=product" })
  product?: SettingValueModelHaljsonEmbeddedEnvironmentEmbeddedProduct;
}


export class SettingValueModelHaljsonEmbeddedEnvironmentLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self?: string;
}


export class SettingValueModelHaljsonEmbeddedEnvironment extends SpeakeasyBase {
  @Metadata({ data: "json, name=_embedded" })
  embedded?: SettingValueModelHaljsonEmbeddedEnvironmentEmbedded;

  @Metadata({ data: "json, name=_links" })
  links?: SettingValueModelHaljsonEmbeddedEnvironmentLinks;

  @Metadata({ data: "json, name=environmentId" })
  environmentId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class SettingValueModelHaljsonEmbeddedIntegrationLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=integrationLinkType" })
  integrationLinkType?: IntegrationLinkTypeEnum;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class SettingValueModelHaljsonEmbeddedSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=creatorEmail" })
  creatorEmail?: string;

  @Metadata({ data: "json, name=creatorFullName" })
  creatorFullName?: string;

  @Metadata({ data: "json, name=expirationWarningAt" })
  expirationWarningAt?: Date;

  @Metadata({ data: "json, name=hint" })
  hint?: string;

  @Metadata({ data: "json, name=isWatching" })
  isWatching?: boolean;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ownerEmail" })
  ownerEmail?: string;

  @Metadata({ data: "json, name=ownerFullName" })
  ownerFullName?: string;

  @Metadata({ data: "json, name=settingId" })
  settingId?: number;

  @Metadata({ data: "json, name=settingType" })
  settingType?: SettingTypeEnum;
}


export class SettingValueModelHaljsonEmbeddedSettingTags extends SpeakeasyBase {
  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=settingTagId" })
  settingTagId?: number;

  @Metadata({ data: "json, name=tagId" })
  tagId?: number;
}


export class SettingValueModelHaljsonEmbedded extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: SettingValueModelHaljsonEmbeddedConfig;

  @Metadata({ data: "json, name=environment" })
  environment?: SettingValueModelHaljsonEmbeddedEnvironment;

  @Metadata({ data: "json, name=integrationLinks", elemType: shared.SettingValueModelHaljsonEmbeddedIntegrationLinks })
  integrationLinks?: SettingValueModelHaljsonEmbeddedIntegrationLinks[];

  @Metadata({ data: "json, name=setting" })
  setting?: SettingValueModelHaljsonEmbeddedSetting;

  @Metadata({ data: "json, name=settingTags", elemType: shared.SettingValueModelHaljsonEmbeddedSettingTags })
  settingTags?: SettingValueModelHaljsonEmbeddedSettingTags[];
}


export class SettingValueModelHaljsonLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self?: string;
}


export class SettingValueModelHaljson extends SpeakeasyBase {
  @Metadata({ data: "json, name=_embedded" })
  embedded?: SettingValueModelHaljsonEmbedded;

  @Metadata({ data: "json, name=_links" })
  links?: SettingValueModelHaljsonLinks;

  @Metadata({ data: "json, name=lastUpdaterUserEmail" })
  lastUpdaterUserEmail?: string;

  @Metadata({ data: "json, name=lastUpdaterUserFullName" })
  lastUpdaterUserFullName?: string;

  @Metadata({ data: "json, name=readOnly" })
  readOnly?: boolean;

  @Metadata({ data: "json, name=rolloutPercentageItems", elemType: shared.RolloutPercentageItemModel })
  rolloutPercentageItems?: RolloutPercentageItemModel[];

  @Metadata({ data: "json, name=rolloutRules", elemType: shared.RolloutRuleModel })
  rolloutRules?: RolloutRuleModel[];

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=value" })
  value?: Map<string, any>;
}
