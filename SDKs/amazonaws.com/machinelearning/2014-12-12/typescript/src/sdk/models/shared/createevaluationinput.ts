import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateEvaluationInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=EvaluationDataSourceId" })
  evaluationDataSourceId: string;

  @Metadata({ data: "json, name=EvaluationId" })
  evaluationId: string;

  @Metadata({ data: "json, name=EvaluationName" })
  evaluationName?: string;

  @Metadata({ data: "json, name=MLModelId" })
  mlModelId: string;
}
