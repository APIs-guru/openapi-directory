import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatasetExportJobSummary } from "./datasetexportjobsummary";



export class ListDatasetExportJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetExportJobs", elemType: DatasetExportJobSummary })
  datasetExportJobs?: DatasetExportJobSummary[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
