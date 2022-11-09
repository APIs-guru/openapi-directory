import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MonitoringJobDefinitionSummary } from "./monitoringjobdefinitionsummary";


export class ListModelExplainabilityJobDefinitionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobDefinitionSummaries", elemType: shared.MonitoringJobDefinitionSummary })
  jobDefinitionSummaries: MonitoringJobDefinitionSummary[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
