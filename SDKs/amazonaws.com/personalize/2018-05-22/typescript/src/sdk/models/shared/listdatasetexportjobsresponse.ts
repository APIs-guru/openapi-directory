import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatasetExportJobSummary } from "./datasetexportjobsummary";


export class ListDatasetExportJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetExportJobs", elemType: shared.DatasetExportJobSummary })
  datasetExportJobs?: DatasetExportJobSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
