import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RdsDatabaseCredentials } from "./rdsdatabasecredentials";
import { RdsDatabase } from "./rdsdatabase";



// RdsDataSpec
/** 
 * The data specification of an Amazon Relational Database Service (Amazon RDS) <code>DataSource</code>.
**/
export class RdsDataSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataRearrangement" })
  dataRearrangement?: string;

  @SpeakeasyMetadata({ data: "json, name=DataSchema" })
  dataSchema?: string;

  @SpeakeasyMetadata({ data: "json, name=DataSchemaUri" })
  dataSchemaUri?: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseCredentials" })
  databaseCredentials: RdsDatabaseCredentials;

  @SpeakeasyMetadata({ data: "json, name=DatabaseInformation" })
  databaseInformation: RdsDatabase;

  @SpeakeasyMetadata({ data: "json, name=ResourceRole" })
  resourceRole: string;

  @SpeakeasyMetadata({ data: "json, name=S3StagingLocation" })
  s3StagingLocation: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroupIds" })
  securityGroupIds: string[];

  @SpeakeasyMetadata({ data: "json, name=SelectSqlQuery" })
  selectSqlQuery: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceRole" })
  serviceRole: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetId" })
  subnetId: string;
}
