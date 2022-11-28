import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SendBonusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssignmentId" })
  assignmentId: string;

  @SpeakeasyMetadata({ data: "json, name=BonusAmount" })
  bonusAmount: string;

  @SpeakeasyMetadata({ data: "json, name=Reason" })
  reason: string;

  @SpeakeasyMetadata({ data: "json, name=UniqueRequestToken" })
  uniqueRequestToken?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkerId" })
  workerId: string;
}
