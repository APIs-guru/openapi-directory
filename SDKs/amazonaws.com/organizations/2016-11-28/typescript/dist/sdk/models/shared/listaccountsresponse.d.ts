import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
export declare class ListAccountsResponse extends SpeakeasyBase {
    accounts?: Account[];
    nextToken?: string;
}
