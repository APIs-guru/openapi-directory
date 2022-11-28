import { SpeakeasyBase } from "../../../internal/utils";
export declare class EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganizationLinks extends SpeakeasyBase {
    members?: string;
    products?: string;
}
export declare class EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganization extends SpeakeasyBase {
    links?: EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganizationLinks;
    name?: string;
    organizationId?: string;
}
export declare class EnvironmentModelHaljsonEmbeddedProductEmbedded extends SpeakeasyBase {
    organization?: EnvironmentModelHaljsonEmbeddedProductEmbeddedOrganization;
}
export declare class EnvironmentModelHaljsonEmbeddedProductLinks extends SpeakeasyBase {
    configs?: string;
    environments?: string;
    members?: string;
    permissionGroups?: string;
    self?: string;
    tags?: string;
}
export declare class EnvironmentModelHaljsonEmbeddedProduct extends SpeakeasyBase {
    embedded?: EnvironmentModelHaljsonEmbeddedProductEmbedded;
    links?: EnvironmentModelHaljsonEmbeddedProductLinks;
    name?: string;
    productId?: string;
}
export declare class EnvironmentModelHaljsonEmbedded extends SpeakeasyBase {
    product?: EnvironmentModelHaljsonEmbeddedProduct;
}
export declare class EnvironmentModelHaljsonLinks extends SpeakeasyBase {
    self?: string;
}
export declare class EnvironmentModelHaljson extends SpeakeasyBase {
    embedded?: EnvironmentModelHaljsonEmbedded;
    links?: EnvironmentModelHaljsonLinks;
    environmentId?: string;
    name?: string;
}
