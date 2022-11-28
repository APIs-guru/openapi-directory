import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserRef } from "./userref";
import { AccountRef } from "./accountref";
import { ProfileRef } from "./profileref";
import { WebPropertyRef } from "./webpropertyref";



// EntityUserLinkPermissionsInput
/** 
 * Permissions the user has for this entity.
**/
export class EntityUserLinkPermissionsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=local" })
  local?: string[];
}


// EntityUserLinkEntity
/** 
 * Entity for this link. It can be an account, a web property, or a view (profile).
**/
export class EntityUserLinkEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountRef" })
  accountRef?: AccountRef;

  @SpeakeasyMetadata({ data: "json, name=profileRef" })
  profileRef?: ProfileRef;

  @SpeakeasyMetadata({ data: "json, name=webPropertyRef" })
  webPropertyRef?: WebPropertyRef;
}


// EntityUserLinkPermissions
/** 
 * Permissions the user has for this entity.
**/
export class EntityUserLinkPermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effective" })
  effective?: string[];

  @SpeakeasyMetadata({ data: "json, name=local" })
  local?: string[];
}


// EntityUserLinkInput
/** 
 * JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity.
**/
export class EntityUserLinkInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entity" })
  entity?: EntityUserLinkEntity;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: EntityUserLinkPermissionsInput;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=userRef" })
  userRef?: UserRef;
}


// EntityUserLink
/** 
 * JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity.
**/
export class EntityUserLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entity" })
  entity?: EntityUserLinkEntity;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: EntityUserLinkPermissions;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=userRef" })
  userRef?: UserRef;
}
