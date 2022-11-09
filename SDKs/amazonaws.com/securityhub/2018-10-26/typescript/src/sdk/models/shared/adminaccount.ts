import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AdminStatusEnum } from "./adminstatusenum";


// AdminAccount
/** 
 * Represents a Security Hub administrator account designated by an organization management account.
**/
export class AdminAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: AdminStatusEnum;
}
