import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoringJobDefinitionSummary } from "./monitoringjobdefinitionsummary";
export declare class ListDataQualityJobDefinitionsResponse extends SpeakeasyBase {
    jobDefinitionSummaries: MonitoringJobDefinitionSummary[];
    nextToken?: string;
}
