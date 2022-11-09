import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetQualificationScoreRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=QualificationTypeId" })
  qualificationTypeId: string;

  @Metadata({ data: "json, name=WorkerId" })
  workerId: string;
}
