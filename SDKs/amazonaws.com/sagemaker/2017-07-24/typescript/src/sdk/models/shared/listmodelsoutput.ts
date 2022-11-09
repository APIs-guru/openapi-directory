import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ModelSummary } from "./modelsummary";


export class ListModelsOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Models", elemType: shared.ModelSummary })
  models: ModelSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
