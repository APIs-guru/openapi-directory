import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ModelSummary } from "./modelsummary";


export class ListModelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ModelSummaries", elemType: shared.ModelSummary })
  modelSummaries?: ModelSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
