import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
/**
 * Response definition for the account list rpc.
**/
export declare class ListAccountsResponse extends SpeakeasyBase {
    accounts?: Account[];
    nextPageToken?: string;
}
