import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetEvaluationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EvaluationId" })
  evaluationId: string;
}
