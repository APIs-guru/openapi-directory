import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorldExportJobSummary } from "./worldexportjobsummary";



export class ListWorldExportJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=worldExportJobSummaries", elemType: WorldExportJobSummary })
  worldExportJobSummaries: WorldExportJobSummary[];
}
