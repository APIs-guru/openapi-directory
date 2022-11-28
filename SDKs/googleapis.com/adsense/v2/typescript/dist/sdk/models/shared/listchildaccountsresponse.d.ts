import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
/**
 * Response definition for the child account list rpc.
**/
export declare class ListChildAccountsResponse extends SpeakeasyBase {
    accounts?: Account[];
    nextPageToken?: string;
}
