import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Describes the database details required to connect to an Amazon Redshift database.
**/
export declare class RedshiftDatabase extends SpeakeasyBase {
    clusterIdentifier: string;
    databaseName: string;
}
