import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringJobDefinitionSummary } from "./monitoringjobdefinitionsummary";
export declare class ListModelQualityJobDefinitionsResponse extends SpeakeasyBase {
    jobDefinitionSummaries: MonitoringJobDefinitionSummary[];
    nextToken?: string;
}
