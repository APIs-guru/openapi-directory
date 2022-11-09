import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorldGenerationJobSummary } from "./worldgenerationjobsummary";


export class ListWorldGenerationJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=worldGenerationJobSummaries", elemType: shared.WorldGenerationJobSummary })
  worldGenerationJobSummaries: WorldGenerationJobSummary[];
}
