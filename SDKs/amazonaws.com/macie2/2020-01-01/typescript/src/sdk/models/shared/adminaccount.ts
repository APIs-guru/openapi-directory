import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdminStatusEnum } from "./adminstatusenum";



// AdminAccount
/** 
 * Provides information about the delegated Amazon Macie administrator account for an Amazon Web Services organization.
**/
export class AdminAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AdminStatusEnum;
}
