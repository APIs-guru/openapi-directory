import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ConfigModelHaljsonEmbeddedProductEmbeddedOrganizationLinks extends SpeakeasyBase {
    members?: string;
    products?: string;
}
export declare class ConfigModelHaljsonEmbeddedProductEmbeddedOrganization extends SpeakeasyBase {
    links?: ConfigModelHaljsonEmbeddedProductEmbeddedOrganizationLinks;
    name?: string;
    organizationId?: string;
}
export declare class ConfigModelHaljsonEmbeddedProductEmbedded extends SpeakeasyBase {
    organization?: ConfigModelHaljsonEmbeddedProductEmbeddedOrganization;
}
export declare class ConfigModelHaljsonEmbeddedProductLinks extends SpeakeasyBase {
    configs?: string;
    environments?: string;
    members?: string;
    permissionGroups?: string;
    self?: string;
    tags?: string;
}
export declare class ConfigModelHaljsonEmbeddedProduct extends SpeakeasyBase {
    embedded?: ConfigModelHaljsonEmbeddedProductEmbedded;
    links?: ConfigModelHaljsonEmbeddedProductLinks;
    name?: string;
    productId?: string;
}
export declare class ConfigModelHaljsonEmbedded extends SpeakeasyBase {
    product?: ConfigModelHaljsonEmbeddedProduct;
}
export declare class ConfigModelHaljsonLinks extends SpeakeasyBase {
    self?: string;
    settings?: string;
}
export declare class ConfigModelHaljson extends SpeakeasyBase {
    embedded?: ConfigModelHaljsonEmbedded;
    links?: ConfigModelHaljsonLinks;
    configId?: string;
    name?: string;
}
