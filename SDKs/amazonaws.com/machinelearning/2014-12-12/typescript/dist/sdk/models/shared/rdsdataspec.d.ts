import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RdsDatabaseCredentials } from "./rdsdatabasecredentials";
import { RdsDatabase } from "./rdsdatabase";
/**
 * The data specification of an Amazon Relational Database Service (Amazon RDS) <code>DataSource</code>.
**/
export declare class RdsDataSpec extends SpeakeasyBase {
    dataRearrangement?: string;
    dataSchema?: string;
    dataSchemaUri?: string;
    databaseCredentials: RdsDatabaseCredentials;
    databaseInformation: RdsDatabase;
    resourceRole: string;
    s3StagingLocation: string;
    securityGroupIds: string[];
    selectSqlQuery: string;
    serviceRole: string;
    subnetId: string;
}
