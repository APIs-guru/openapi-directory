import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BonusPayment
/** 
 * An object representing a Bonus payment paid to a Worker.
**/
export class BonusPayment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssignmentId" })
  assignmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=BonusAmount" })
  bonusAmount?: string;

  @SpeakeasyMetadata({ data: "json, name=GrantTime" })
  grantTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkerId" })
  workerId?: string;
}
