import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RdsDatabaseCredentials } from "./rdsdatabasecredentials";
import { RdsDatabase } from "./rdsdatabase";


// RdsDataSpec
/** 
 * The data specification of an Amazon Relational Database Service (Amazon RDS) <code>DataSource</code>.
**/
export class RdsDataSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataRearrangement" })
  dataRearrangement?: string;

  @Metadata({ data: "json, name=DataSchema" })
  dataSchema?: string;

  @Metadata({ data: "json, name=DataSchemaUri" })
  dataSchemaUri?: string;

  @Metadata({ data: "json, name=DatabaseCredentials" })
  databaseCredentials: RdsDatabaseCredentials;

  @Metadata({ data: "json, name=DatabaseInformation" })
  databaseInformation: RdsDatabase;

  @Metadata({ data: "json, name=ResourceRole" })
  resourceRole: string;

  @Metadata({ data: "json, name=S3StagingLocation" })
  s3StagingLocation: string;

  @Metadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds: string[];

  @Metadata({ data: "json, name=SelectSqlQuery" })
  selectSqlQuery: string;

  @Metadata({ data: "json, name=ServiceRole" })
  serviceRole: string;

  @Metadata({ data: "json, name=SubnetId" })
  subnetId: string;
}
