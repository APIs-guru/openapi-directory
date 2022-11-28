import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteEvaluationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EvaluationId" })
  evaluationId: string;
}
