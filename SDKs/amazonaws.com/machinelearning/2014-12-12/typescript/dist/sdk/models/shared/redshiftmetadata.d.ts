import { SpeakeasyBase } from "../../../internal/utils";
import { RedshiftDatabase } from "./redshiftdatabase";
/**
 * Describes the <code>DataSource</code> details specific to Amazon Redshift.
**/
export declare class RedshiftMetadata extends SpeakeasyBase {
    databaseUserName?: string;
    redshiftDatabase?: RedshiftDatabase;
    selectSqlQuery?: string;
}
