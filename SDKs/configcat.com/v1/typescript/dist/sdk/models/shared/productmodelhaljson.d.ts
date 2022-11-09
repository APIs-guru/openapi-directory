import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProductModelHaljsonEmbeddedOrganizationLinks extends SpeakeasyBase {
    members?: string;
    products?: string;
}
export declare class ProductModelHaljsonEmbeddedOrganization extends SpeakeasyBase {
    links?: ProductModelHaljsonEmbeddedOrganizationLinks;
    name?: string;
    organizationId?: string;
}
export declare class ProductModelHaljsonEmbedded extends SpeakeasyBase {
    organization?: ProductModelHaljsonEmbeddedOrganization;
}
export declare class ProductModelHaljsonLinks extends SpeakeasyBase {
    configs?: string;
    environments?: string;
    members?: string;
    permissionGroups?: string;
    self?: string;
    tags?: string;
}
export declare class ProductModelHaljson extends SpeakeasyBase {
    embedded?: ProductModelHaljsonEmbedded;
    links?: ProductModelHaljsonLinks;
    name?: string;
    productId?: string;
}
