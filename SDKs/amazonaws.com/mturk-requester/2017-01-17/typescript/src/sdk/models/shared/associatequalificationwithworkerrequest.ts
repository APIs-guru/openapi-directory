import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociateQualificationWithWorkerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=IntegerValue" })
  integerValue?: number;

  @Metadata({ data: "json, name=QualificationTypeId" })
  qualificationTypeId: string;

  @Metadata({ data: "json, name=SendNotification" })
  sendNotification?: boolean;

  @Metadata({ data: "json, name=WorkerId" })
  workerId: string;
}
