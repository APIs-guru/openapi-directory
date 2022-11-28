import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Child link for an account entry. Points to the list of web properties for this account.
**/
export declare class AccountChildLink extends SpeakeasyBase {
    href?: string;
    type?: string;
}
/**
 * Permissions the user has for this account.
**/
export declare class AccountPermissions extends SpeakeasyBase {
    effective?: string[];
}
/**
 * JSON template for Analytics account entry.
**/
export declare class Account extends SpeakeasyBase {
    childLink?: AccountChildLink;
    created?: Date;
    id?: string;
    kind?: string;
    name?: string;
    permissions?: AccountPermissions;
    selfLink?: string;
    starred?: boolean;
    updated?: Date;
}
