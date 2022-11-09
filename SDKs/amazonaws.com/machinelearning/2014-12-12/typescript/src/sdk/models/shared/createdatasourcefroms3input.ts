import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { S3DataSpec } from "./s3dataspec";


export class CreateDataSourceFromS3Input extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComputeStatistics" })
  computeStatistics?: boolean;

  @Metadata({ data: "json, name=DataSourceId" })
  dataSourceId: string;

  @Metadata({ data: "json, name=DataSourceName" })
  dataSourceName?: string;

  @Metadata({ data: "json, name=DataSpec" })
  dataSpec: S3DataSpec;
}
