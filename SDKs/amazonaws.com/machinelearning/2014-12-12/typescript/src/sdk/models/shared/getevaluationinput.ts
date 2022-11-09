import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetEvaluationInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=EvaluationId" })
  evaluationId: string;
}
