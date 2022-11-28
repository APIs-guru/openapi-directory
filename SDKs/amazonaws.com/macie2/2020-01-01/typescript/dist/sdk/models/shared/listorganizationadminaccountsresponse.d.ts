import { SpeakeasyBase } from "../../../internal/utils";
import { AdminAccount } from "./adminaccount";
export declare class ListOrganizationAdminAccountsResponse extends SpeakeasyBase {
    adminAccounts?: AdminAccount[];
    nextToken?: string;
}
