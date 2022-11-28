import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatasetImportJob } from "./datasetimportjob";



export class DescribeDatasetImportJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=datasetImportJob" })
  datasetImportJob?: DatasetImportJob;
}
