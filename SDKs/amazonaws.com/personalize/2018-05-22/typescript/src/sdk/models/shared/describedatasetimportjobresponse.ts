import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DatasetImportJob } from "./datasetimportjob";


export class DescribeDatasetImportJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=datasetImportJob" })
  datasetImportJob?: DatasetImportJob;
}
