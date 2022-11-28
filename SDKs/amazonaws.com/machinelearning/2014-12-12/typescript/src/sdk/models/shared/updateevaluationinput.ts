import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateEvaluationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EvaluationId" })
  evaluationId: string;

  @SpeakeasyMetadata({ data: "json, name=EvaluationName" })
  evaluationName: string;
}
