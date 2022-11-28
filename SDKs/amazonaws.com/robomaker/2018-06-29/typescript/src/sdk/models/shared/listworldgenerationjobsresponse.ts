import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorldGenerationJobSummary } from "./worldgenerationjobsummary";



export class ListWorldGenerationJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=worldGenerationJobSummaries", elemType: WorldGenerationJobSummary })
  worldGenerationJobSummaries: WorldGenerationJobSummary[];
}
