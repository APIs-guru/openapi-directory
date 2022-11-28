import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { Profile } from "./profile";
import { Webproperty } from "./webproperty";
/**
 * JSON template for an Analytics account tree response. The account tree response is used in the provisioning api to return the result of creating an account, property, and view (profile).
**/
export declare class AccountTreeResponse extends SpeakeasyBase {
    account?: Account;
    kind?: string;
    profile?: Profile;
    webproperty?: Webproperty;
}
