import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetQualificationScoreRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=QualificationTypeId" })
  qualificationTypeId: string;

  @SpeakeasyMetadata({ data: "json, name=WorkerId" })
  workerId: string;
}
