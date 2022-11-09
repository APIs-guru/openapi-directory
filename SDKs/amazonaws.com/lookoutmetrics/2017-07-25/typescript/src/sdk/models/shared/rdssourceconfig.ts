import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VpcConfiguration } from "./vpcconfiguration";


// RdsSourceConfig
/** 
 * Contains information about the Amazon Relational Database Service (RDS) configuration.
**/
export class RdsSourceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=DBInstanceIdentifier" })
  dbInstanceIdentifier: string;

  @Metadata({ data: "json, name=DatabaseHost" })
  databaseHost: string;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @Metadata({ data: "json, name=DatabasePort" })
  databasePort: number;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=SecretManagerArn" })
  secretManagerArn: string;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;

  @Metadata({ data: "json, name=VpcConfiguration" })
  vpcConfiguration: VpcConfiguration;
}
