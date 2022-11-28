import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSource } from "./datasource";



export class CreateDatasetImportJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSource" })
  dataSource: DataSource;

  @SpeakeasyMetadata({ data: "json, name=datasetArn" })
  datasetArn: string;

  @SpeakeasyMetadata({ data: "json, name=jobName" })
  jobName: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;
}
