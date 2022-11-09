import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateEvaluationInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=EvaluationId" })
  evaluationId: string;

  @Metadata({ data: "json, name=EvaluationName" })
  evaluationName: string;
}
