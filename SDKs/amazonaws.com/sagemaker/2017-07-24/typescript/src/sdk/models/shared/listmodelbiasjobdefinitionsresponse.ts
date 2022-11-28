import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonitoringJobDefinitionSummary } from "./monitoringjobdefinitionsummary";



export class ListModelBiasJobDefinitionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobDefinitionSummaries", elemType: MonitoringJobDefinitionSummary })
  jobDefinitionSummaries: MonitoringJobDefinitionSummary[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
