import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RedshiftDataSpec } from "./redshiftdataspec";



export class CreateDataSourceFromRedshiftInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComputeStatistics" })
  computeStatistics?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DataSourceId" })
  dataSourceId: string;

  @SpeakeasyMetadata({ data: "json, name=DataSourceName" })
  dataSourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=DataSpec" })
  dataSpec: RedshiftDataSpec;

  @SpeakeasyMetadata({ data: "json, name=RoleARN" })
  roleArn: string;
}
