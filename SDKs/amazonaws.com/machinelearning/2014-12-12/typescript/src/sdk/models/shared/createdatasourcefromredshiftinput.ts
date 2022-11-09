import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RedshiftDataSpec } from "./redshiftdataspec";


export class CreateDataSourceFromRedshiftInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComputeStatistics" })
  computeStatistics?: boolean;

  @Metadata({ data: "json, name=DataSourceId" })
  dataSourceId: string;

  @Metadata({ data: "json, name=DataSourceName" })
  dataSourceName?: string;

  @Metadata({ data: "json, name=DataSpec" })
  dataSpec: RedshiftDataSpec;

  @Metadata({ data: "json, name=RoleARN" })
  roleArn: string;
}
