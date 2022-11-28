import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Child link for this view (profile). Points to the list of goals for this view (profile).
**/
export declare class ProfileChildLink extends SpeakeasyBase {
    href?: string;
    type?: string;
}
/**
 * Parent link for this view (profile). Points to the web property to which this view (profile) belongs.
**/
export declare class ProfileParentLink extends SpeakeasyBase {
    href?: string;
    type?: string;
}
/**
 * Permissions the user has for this view (profile).
**/
export declare class ProfilePermissions extends SpeakeasyBase {
    effective?: string[];
}
/**
 * JSON template for an Analytics view (profile).
**/
export declare class Profile extends SpeakeasyBase {
    accountId?: string;
    botFilteringEnabled?: boolean;
    childLink?: ProfileChildLink;
    created?: Date;
    currency?: string;
    defaultPage?: string;
    eCommerceTracking?: boolean;
    enhancedECommerceTracking?: boolean;
    excludeQueryParameters?: string;
    id?: string;
    internalWebPropertyId?: string;
    kind?: string;
    name?: string;
    parentLink?: ProfileParentLink;
    permissions?: ProfilePermissions;
    selfLink?: string;
    siteSearchCategoryParameters?: string;
    siteSearchQueryParameters?: string;
    starred?: boolean;
    stripSiteSearchCategoryParameters?: boolean;
    stripSiteSearchQueryParameters?: boolean;
    timezone?: string;
    type?: string;
    updated?: Date;
    webPropertyId?: string;
    websiteUrl?: string;
}
/**
 * JSON template for an Analytics view (profile).
**/
export declare class ProfileInput extends SpeakeasyBase {
    accountId?: string;
    botFilteringEnabled?: boolean;
    childLink?: ProfileChildLink;
    currency?: string;
    defaultPage?: string;
    eCommerceTracking?: boolean;
    enhancedECommerceTracking?: boolean;
    excludeQueryParameters?: string;
    id?: string;
    name?: string;
    parentLink?: ProfileParentLink;
    siteSearchCategoryParameters?: string;
    siteSearchQueryParameters?: string;
    starred?: boolean;
    stripSiteSearchCategoryParameters?: boolean;
    stripSiteSearchQueryParameters?: boolean;
    timezone?: string;
    type?: string;
    websiteUrl?: string;
}
