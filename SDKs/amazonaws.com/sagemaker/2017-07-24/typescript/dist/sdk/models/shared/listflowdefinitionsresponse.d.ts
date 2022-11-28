import { SpeakeasyBase } from "../../../internal/utils";
import { FlowDefinitionSummary } from "./flowdefinitionsummary";
export declare class ListFlowDefinitionsResponse extends SpeakeasyBase {
    flowDefinitionSummaries: FlowDefinitionSummary[];
    nextToken?: string;
}
