import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringJobDefinitionSummary } from "./monitoringjobdefinitionsummary";
export declare class ListModelExplainabilityJobDefinitionsResponse extends SpeakeasyBase {
    jobDefinitionSummaries: MonitoringJobDefinitionSummary[];
    nextToken?: string;
}
