import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdminStatusEnum } from "./adminstatusenum";



// AdminAccount
/** 
 * Represents a Security Hub administrator account designated by an organization management account.
**/
export class AdminAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AccountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: AdminStatusEnum;
}
