import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccountChildLink
/** 
 * Child link for an account entry. Points to the list of web properties for this account.
**/
export class AccountChildLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


// AccountPermissions
/** 
 * Permissions the user has for this account.
**/
export class AccountPermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=effective" })
  effective?: string[];
}


// Account
/** 
 * JSON template for Analytics account entry.
**/
export class Account extends SpeakeasyBase {
  @Metadata({ data: "json, name=childLink" })
  childLink?: AccountChildLink;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=permissions" })
  permissions?: AccountPermissions;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=starred" })
  starred?: boolean;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;
}
