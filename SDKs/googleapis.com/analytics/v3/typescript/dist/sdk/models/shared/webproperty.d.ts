import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Child link for this web property. Points to the list of views (profiles) for this web property.
**/
export declare class WebpropertyChildLink extends SpeakeasyBase {
    href?: string;
    type?: string;
}
/**
 * Parent link for this web property. Points to the account to which this web property belongs.
**/
export declare class WebpropertyParentLink extends SpeakeasyBase {
    href?: string;
    type?: string;
}
/**
 * Permissions the user has for this web property.
**/
export declare class WebpropertyPermissions extends SpeakeasyBase {
    effective?: string[];
}
/**
 * JSON template for an Analytics web property.
**/
export declare class Webproperty extends SpeakeasyBase {
    accountId?: string;
    childLink?: WebpropertyChildLink;
    created?: Date;
    dataRetentionResetOnNewActivity?: boolean;
    dataRetentionTtl?: string;
    defaultProfileId?: string;
    id?: string;
    industryVertical?: string;
    internalWebPropertyId?: string;
    kind?: string;
    level?: string;
    name?: string;
    parentLink?: WebpropertyParentLink;
    permissions?: WebpropertyPermissions;
    profileCount?: number;
    selfLink?: string;
    starred?: boolean;
    updated?: Date;
    websiteUrl?: string;
}
/**
 * JSON template for an Analytics web property.
**/
export declare class WebpropertyInput extends SpeakeasyBase {
    accountId?: string;
    childLink?: WebpropertyChildLink;
    dataRetentionResetOnNewActivity?: boolean;
    dataRetentionTtl?: string;
    defaultProfileId?: string;
    id?: string;
    industryVertical?: string;
    name?: string;
    parentLink?: WebpropertyParentLink;
    starred?: boolean;
    websiteUrl?: string;
}
