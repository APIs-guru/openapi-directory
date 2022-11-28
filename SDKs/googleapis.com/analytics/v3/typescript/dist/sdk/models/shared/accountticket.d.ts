import { SpeakeasyBase } from "../../../internal/utils";
import { Account1 } from "./account1";
import { ProfileInput } from "./profile";
import { WebpropertyInput } from "./webproperty";
import { Account } from "./account";
import { Profile } from "./profile";
import { Webproperty } from "./webproperty";
/**
 * JSON template for an Analytics account ticket. The account ticket consists of the ticket ID and the basic information for the account, property and profile.
**/
export declare class AccountTicketInput extends SpeakeasyBase {
    account?: Account1;
    id?: string;
    kind?: string;
    profile?: ProfileInput;
    redirectUri?: string;
    webproperty?: WebpropertyInput;
}
/**
 * JSON template for an Analytics account ticket. The account ticket consists of the ticket ID and the basic information for the account, property and profile.
**/
export declare class AccountTicket extends SpeakeasyBase {
    account?: Account;
    id?: string;
    kind?: string;
    profile?: Profile;
    redirectUri?: string;
    webproperty?: Webproperty;
}
