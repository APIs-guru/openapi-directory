import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RdsDatabase } from "./rdsdatabase";
/**
 * The datasource details that are specific to Amazon RDS.
**/
export declare class RdsMetadata extends SpeakeasyBase {
    dataPipelineId?: string;
    database?: RdsDatabase;
    databaseUserName?: string;
    resourceRole?: string;
    selectSqlQuery?: string;
    serviceRole?: string;
}
