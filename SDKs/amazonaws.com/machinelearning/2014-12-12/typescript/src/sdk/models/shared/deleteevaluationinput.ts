import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteEvaluationInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=EvaluationId" })
  evaluationId: string;
}
