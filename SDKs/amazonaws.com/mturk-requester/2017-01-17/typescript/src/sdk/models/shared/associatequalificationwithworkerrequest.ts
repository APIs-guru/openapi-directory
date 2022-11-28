import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateQualificationWithWorkerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IntegerValue" })
  integerValue?: number;

  @SpeakeasyMetadata({ data: "json, name=QualificationTypeId" })
  qualificationTypeId: string;

  @SpeakeasyMetadata({ data: "json, name=SendNotification" })
  sendNotification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=WorkerId" })
  workerId: string;
}
