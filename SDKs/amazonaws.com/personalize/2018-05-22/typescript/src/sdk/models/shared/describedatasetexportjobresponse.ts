import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DatasetExportJob } from "./datasetexportjob";


export class DescribeDatasetExportJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetExportJob" })
  datasetExportJob?: DatasetExportJob;
}
