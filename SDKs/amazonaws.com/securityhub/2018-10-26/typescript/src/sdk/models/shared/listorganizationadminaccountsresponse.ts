import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdminAccount } from "./adminaccount";


export class ListOrganizationAdminAccountsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AdminAccounts", elemType: shared.AdminAccount })
  adminAccounts?: AdminAccount[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
