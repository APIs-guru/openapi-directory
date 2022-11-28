import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateEvaluationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EvaluationDataSourceId" })
  evaluationDataSourceId: string;

  @SpeakeasyMetadata({ data: "json, name=EvaluationId" })
  evaluationId: string;

  @SpeakeasyMetadata({ data: "json, name=EvaluationName" })
  evaluationName?: string;

  @SpeakeasyMetadata({ data: "json, name=MLModelId" })
  mlModelId: string;
}
