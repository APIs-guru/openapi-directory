import { SpeakeasyBase } from "../../../internal/utils";
export declare class TagModelHaljsonEmbeddedProductEmbeddedOrganizationLinks extends SpeakeasyBase {
    members?: string;
    products?: string;
}
export declare class TagModelHaljsonEmbeddedProductEmbeddedOrganization extends SpeakeasyBase {
    links?: TagModelHaljsonEmbeddedProductEmbeddedOrganizationLinks;
    name?: string;
    organizationId?: string;
}
export declare class TagModelHaljsonEmbeddedProductEmbedded extends SpeakeasyBase {
    organization?: TagModelHaljsonEmbeddedProductEmbeddedOrganization;
}
export declare class TagModelHaljsonEmbeddedProductLinks extends SpeakeasyBase {
    configs?: string;
    environments?: string;
    members?: string;
    permissionGroups?: string;
    self?: string;
    tags?: string;
}
export declare class TagModelHaljsonEmbeddedProduct extends SpeakeasyBase {
    embedded?: TagModelHaljsonEmbeddedProductEmbedded;
    links?: TagModelHaljsonEmbeddedProductLinks;
    name?: string;
    productId?: string;
}
export declare class TagModelHaljsonEmbedded extends SpeakeasyBase {
    product?: TagModelHaljsonEmbeddedProduct;
}
export declare class TagModelHaljsonLinks extends SpeakeasyBase {
    self?: string;
}
export declare class TagModelHaljson extends SpeakeasyBase {
    embedded?: TagModelHaljsonEmbedded;
    links?: TagModelHaljsonLinks;
    color?: string;
    name?: string;
    tagId?: number;
}
