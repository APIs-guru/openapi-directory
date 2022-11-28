import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { S3DataSpec } from "./s3dataspec";



export class CreateDataSourceFromS3Input extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComputeStatistics" })
  computeStatistics?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DataSourceId" })
  dataSourceId: string;

  @SpeakeasyMetadata({ data: "json, name=DataSourceName" })
  dataSourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=DataSpec" })
  dataSpec: S3DataSpec;
}
