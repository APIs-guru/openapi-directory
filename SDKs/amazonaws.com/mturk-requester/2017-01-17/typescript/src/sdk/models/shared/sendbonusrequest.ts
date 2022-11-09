import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SendBonusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssignmentId" })
  assignmentId: string;

  @Metadata({ data: "json, name=BonusAmount" })
  bonusAmount: string;

  @Metadata({ data: "json, name=Reason" })
  reason: string;

  @Metadata({ data: "json, name=UniqueRequestToken" })
  uniqueRequestToken?: string;

  @Metadata({ data: "json, name=WorkerId" })
  workerId: string;
}
