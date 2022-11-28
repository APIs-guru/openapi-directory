import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpcConfiguration } from "./vpcconfiguration";



// RedshiftSourceConfig
/** 
 * Provides information about the Amazon Redshift database configuration.
**/
export class RedshiftSourceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterIdentifier" })
  clusterIdentifier: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseHost" })
  databaseHost: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=DatabasePort" })
  databasePort: number;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=SecretManagerArn" })
  secretManagerArn: string;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;

  @SpeakeasyMetadata({ data: "json, name=VpcConfiguration" })
  vpcConfiguration: VpcConfiguration;
}
