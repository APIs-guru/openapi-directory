import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccountChildLink
/** 
 * Child link for an account entry. Points to the list of web properties for this account.
**/
export class AccountChildLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// AccountPermissions
/** 
 * Permissions the user has for this account.
**/
export class AccountPermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=effective" })
  effective?: string[];
}


// Account
/** 
 * JSON template for Analytics account entry.
**/
export class Account extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=childLink" })
  childLink?: AccountChildLink;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: AccountPermissions;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=starred" })
  starred?: boolean;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;
}
