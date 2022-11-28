import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdminAccount } from "./adminaccount";



export class ListOrganizationAdminAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AdminAccounts", elemType: AdminAccount })
  adminAccounts?: AdminAccount[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
