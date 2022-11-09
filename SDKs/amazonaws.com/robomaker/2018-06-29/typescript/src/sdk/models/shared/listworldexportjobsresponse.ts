import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WorldExportJobSummary } from "./worldexportjobsummary";


export class ListWorldExportJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=worldExportJobSummaries", elemType: shared.WorldExportJobSummary })
  worldExportJobSummaries: WorldExportJobSummary[];
}
