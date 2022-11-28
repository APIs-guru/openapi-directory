import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ModelSummary } from "./modelsummary";



export class ListModelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ModelSummaries", elemType: ModelSummary })
  modelSummaries?: ModelSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
