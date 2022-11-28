import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Account1 } from "./account1";
import { ProfileInput } from "./profile";
import { WebpropertyInput } from "./webproperty";
import { Account } from "./account";
import { Profile } from "./profile";
import { Webproperty } from "./webproperty";



// AccountTicketInput
/** 
 * JSON template for an Analytics account ticket. The account ticket consists of the ticket ID and the basic information for the account, property and profile.
**/
export class AccountTicketInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: Account1;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile?: ProfileInput;

  @SpeakeasyMetadata({ data: "json, name=redirectUri" })
  redirectUri?: string;

  @SpeakeasyMetadata({ data: "json, name=webproperty" })
  webproperty?: WebpropertyInput;
}


// AccountTicket
/** 
 * JSON template for an Analytics account ticket. The account ticket consists of the ticket ID and the basic information for the account, property and profile.
**/
export class AccountTicket extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: Account;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile?: Profile;

  @SpeakeasyMetadata({ data: "json, name=redirectUri" })
  redirectUri?: string;

  @SpeakeasyMetadata({ data: "json, name=webproperty" })
  webproperty?: Webproperty;
}
