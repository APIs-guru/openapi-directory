import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataSource } from "./datasource";


export class CreateDatasetImportJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSource" })
  dataSource: DataSource;

  @Metadata({ data: "json, name=datasetArn" })
  datasetArn: string;

  @Metadata({ data: "json, name=jobName" })
  jobName: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;
}
