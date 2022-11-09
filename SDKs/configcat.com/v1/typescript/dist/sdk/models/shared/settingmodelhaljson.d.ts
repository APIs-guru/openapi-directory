import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SettingTypeEnum } from "./settingtypeenum";
export declare class SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganizationLinks extends SpeakeasyBase {
    members?: string;
    products?: string;
}
export declare class SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganization extends SpeakeasyBase {
    links?: SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganizationLinks;
    name?: string;
    organizationId?: string;
}
export declare class SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbedded extends SpeakeasyBase {
    organization?: SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbeddedOrganization;
}
export declare class SettingModelHaljsonEmbeddedTagsEmbeddedProductLinks extends SpeakeasyBase {
    configs?: string;
    environments?: string;
    members?: string;
    permissionGroups?: string;
    self?: string;
    tags?: string;
}
export declare class SettingModelHaljsonEmbeddedTagsEmbeddedProduct extends SpeakeasyBase {
    embedded?: SettingModelHaljsonEmbeddedTagsEmbeddedProductEmbedded;
    links?: SettingModelHaljsonEmbeddedTagsEmbeddedProductLinks;
    name?: string;
    productId?: string;
}
export declare class SettingModelHaljsonEmbeddedTagsEmbedded extends SpeakeasyBase {
    product?: SettingModelHaljsonEmbeddedTagsEmbeddedProduct;
}
export declare class SettingModelHaljsonEmbeddedTagsLinks extends SpeakeasyBase {
    self?: string;
}
export declare class SettingModelHaljsonEmbeddedTags extends SpeakeasyBase {
    embedded?: SettingModelHaljsonEmbeddedTagsEmbedded;
    links?: SettingModelHaljsonEmbeddedTagsLinks;
    color?: string;
    name?: string;
    tagId?: number;
}
export declare class SettingModelHaljsonEmbedded extends SpeakeasyBase {
    tags?: SettingModelHaljsonEmbeddedTags[];
}
export declare class SettingModelHaljsonLinks extends SpeakeasyBase {
    self?: string;
}
export declare class SettingModelHaljson extends SpeakeasyBase {
    embedded?: SettingModelHaljsonEmbedded;
    links?: SettingModelHaljsonLinks;
    configId?: string;
    configName?: string;
    expirationWarningAt?: Date;
    hint?: string;
    key?: string;
    name?: string;
    ownerUserEmail?: string;
    ownerUserFullName?: string;
    settingId?: number;
    settingType?: SettingTypeEnum;
}
