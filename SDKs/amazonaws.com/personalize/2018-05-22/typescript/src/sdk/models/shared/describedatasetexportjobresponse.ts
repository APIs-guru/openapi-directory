import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatasetExportJob } from "./datasetexportjob";



export class DescribeDatasetExportJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetExportJob" })
  datasetExportJob?: DatasetExportJob;
}
