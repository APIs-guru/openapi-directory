import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AdminStatusEnum } from "./adminstatusenum";


// AdminAccount
/** 
 * Provides information about the delegated Amazon Macie administrator account for an Amazon Web Services organization.
**/
export class AdminAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=status" })
  status?: AdminStatusEnum;
}
