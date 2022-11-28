import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RdsDataSpec } from "./rdsdataspec";



export class CreateDataSourceFromRdsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComputeStatistics" })
  computeStatistics?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DataSourceId" })
  dataSourceId: string;

  @SpeakeasyMetadata({ data: "json, name=DataSourceName" })
  dataSourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=RDSData" })
  rdsData: RdsDataSpec;

  @SpeakeasyMetadata({ data: "json, name=RoleARN" })
  roleArn: string;
}
