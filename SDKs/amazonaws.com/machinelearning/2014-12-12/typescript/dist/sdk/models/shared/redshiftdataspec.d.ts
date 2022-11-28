import { SpeakeasyBase } from "../../../internal/utils";
import { RedshiftDatabaseCredentials } from "./redshiftdatabasecredentials";
import { RedshiftDatabase } from "./redshiftdatabase";
/**
 * Describes the data specification of an Amazon Redshift <code>DataSource</code>.
**/
export declare class RedshiftDataSpec extends SpeakeasyBase {
    dataRearrangement?: string;
    dataSchema?: string;
    dataSchemaUri?: string;
    databaseCredentials: RedshiftDatabaseCredentials;
    databaseInformation: RedshiftDatabase;
    s3StagingLocation: string;
    selectSqlQuery: string;
}
