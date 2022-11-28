import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RedshiftDatabaseCredentials } from "./redshiftdatabasecredentials";
import { RedshiftDatabase } from "./redshiftdatabase";



// RedshiftDataSpec
/** 
 * Describes the data specification of an Amazon Redshift <code>DataSource</code>.
**/
export class RedshiftDataSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DataRearrangement" })
  dataRearrangement?: string;

  @SpeakeasyMetadata({ data: "json, name=DataSchema" })
  dataSchema?: string;

  @SpeakeasyMetadata({ data: "json, name=DataSchemaUri" })
  dataSchemaUri?: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseCredentials" })
  databaseCredentials: RedshiftDatabaseCredentials;

  @SpeakeasyMetadata({ data: "json, name=DatabaseInformation" })
  databaseInformation: RedshiftDatabase;

  @SpeakeasyMetadata({ data: "json, name=S3StagingLocation" })
  s3StagingLocation: string;

  @SpeakeasyMetadata({ data: "json, name=SelectSqlQuery" })
  selectSqlQuery: string;
}
