import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RdsDataSpec } from "./rdsdataspec";


export class CreateDataSourceFromRdsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComputeStatistics" })
  computeStatistics?: boolean;

  @Metadata({ data: "json, name=DataSourceId" })
  dataSourceId: string;

  @Metadata({ data: "json, name=DataSourceName" })
  dataSourceName?: string;

  @Metadata({ data: "json, name=RDSData" })
  rdsData: RdsDataSpec;

  @Metadata({ data: "json, name=RoleARN" })
  roleArn: string;
}
