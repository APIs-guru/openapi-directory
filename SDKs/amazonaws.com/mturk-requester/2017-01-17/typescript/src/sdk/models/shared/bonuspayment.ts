import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BonusPayment
/** 
 * An object representing a Bonus payment paid to a Worker.
**/
export class BonusPayment extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssignmentId" })
  assignmentId?: string;

  @Metadata({ data: "json, name=BonusAmount" })
  bonusAmount?: string;

  @Metadata({ data: "json, name=GrantTime" })
  grantTime?: Date;

  @Metadata({ data: "json, name=Reason" })
  reason?: string;

  @Metadata({ data: "json, name=WorkerId" })
  workerId?: string;
}
