import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatasetImportJobSummary } from "./datasetimportjobsummary";


export class ListDatasetImportJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetImportJobs", elemType: shared.DatasetImportJobSummary })
  datasetImportJobs?: DatasetImportJobSummary[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
