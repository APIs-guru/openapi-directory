import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ModelSummary } from "./modelsummary";



export class ListModelsOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Models", elemType: ModelSummary })
  models: ModelSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
