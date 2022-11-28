import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FlowDefinitionSummary } from "./flowdefinitionsummary";



export class ListFlowDefinitionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FlowDefinitionSummaries", elemType: FlowDefinitionSummary })
  flowDefinitionSummaries: FlowDefinitionSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
