import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FlowDefinitionSummary } from "./flowdefinitionsummary";


export class ListFlowDefinitionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FlowDefinitionSummaries", elemType: shared.FlowDefinitionSummary })
  flowDefinitionSummaries: FlowDefinitionSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
