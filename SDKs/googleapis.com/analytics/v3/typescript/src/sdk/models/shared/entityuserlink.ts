import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccountRef } from "./accountref";
import { ProfileRef } from "./profileref";
import { WebPropertyRef } from "./webpropertyref";
import { UserRef } from "./userref";


// EntityUserLinkEntity
/** 
 * Entity for this link. It can be an account, a web property, or a view (profile).
**/
export class EntityUserLinkEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountRef" })
  accountRef?: AccountRef;

  @Metadata({ data: "json, name=profileRef" })
  profileRef?: ProfileRef;

  @Metadata({ data: "json, name=webPropertyRef" })
  webPropertyRef?: WebPropertyRef;
}


// EntityUserLinkPermissions
/** 
 * Permissions the user has for this entity.
**/
export class EntityUserLinkPermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=effective" })
  effective?: string[];

  @Metadata({ data: "json, name=local" })
  local?: string[];
}


// EntityUserLink
/** 
 * JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity.
**/
export class EntityUserLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=entity" })
  entity?: EntityUserLinkEntity;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=permissions" })
  permissions?: EntityUserLinkPermissions;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=userRef" })
  userRef?: UserRef;
}
