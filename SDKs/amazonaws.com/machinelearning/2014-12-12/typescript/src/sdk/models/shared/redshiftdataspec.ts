import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RedshiftDatabaseCredentials } from "./redshiftdatabasecredentials";
import { RedshiftDatabase } from "./redshiftdatabase";


// RedshiftDataSpec
/** 
 * Describes the data specification of an Amazon Redshift <code>DataSource</code>.
**/
export class RedshiftDataSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=DataRearrangement" })
  dataRearrangement?: string;

  @Metadata({ data: "json, name=DataSchema" })
  dataSchema?: string;

  @Metadata({ data: "json, name=DataSchemaUri" })
  dataSchemaUri?: string;

  @Metadata({ data: "json, name=DatabaseCredentials" })
  databaseCredentials: RedshiftDatabaseCredentials;

  @Metadata({ data: "json, name=DatabaseInformation" })
  databaseInformation: RedshiftDatabase;

  @Metadata({ data: "json, name=S3StagingLocation" })
  s3StagingLocation: string;

  @Metadata({ data: "json, name=SelectSqlQuery" })
  selectSqlQuery: string;
}
