import { SpeakeasyBase } from "../../../internal/utils";
import { UserRef } from "./userref";
import { AccountRef } from "./accountref";
import { ProfileRef } from "./profileref";
import { WebPropertyRef } from "./webpropertyref";
/**
 * Permissions the user has for this entity.
**/
export declare class EntityUserLinkPermissionsInput extends SpeakeasyBase {
    local?: string[];
}
/**
 * Entity for this link. It can be an account, a web property, or a view (profile).
**/
export declare class EntityUserLinkEntity extends SpeakeasyBase {
    accountRef?: AccountRef;
    profileRef?: ProfileRef;
    webPropertyRef?: WebPropertyRef;
}
/**
 * Permissions the user has for this entity.
**/
export declare class EntityUserLinkPermissions extends SpeakeasyBase {
    effective?: string[];
    local?: string[];
}
/**
 * JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity.
**/
export declare class EntityUserLinkInput extends SpeakeasyBase {
    entity?: EntityUserLinkEntity;
    id?: string;
    kind?: string;
    permissions?: EntityUserLinkPermissionsInput;
    selfLink?: string;
    userRef?: UserRef;
}
/**
 * JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity.
**/
export declare class EntityUserLink extends SpeakeasyBase {
    entity?: EntityUserLinkEntity;
    id?: string;
    kind?: string;
    permissions?: EntityUserLinkPermissions;
    selfLink?: string;
    userRef?: UserRef;
}
