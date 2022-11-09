import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Account } from "./account";
import { Profile } from "./profile";
import { Webproperty } from "./webproperty";


// AccountTreeResponse
/** 
 * JSON template for an Analytics account tree response. The account tree response is used in the provisioning api to return the result of creating an account, property, and view (profile).
**/
export class AccountTreeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account?: Account;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=profile" })
  profile?: Profile;

  @Metadata({ data: "json, name=webproperty" })
  webproperty?: Webproperty;
}
