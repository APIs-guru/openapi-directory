import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The meta data of the Glue table which serves as data catalog for the <code>OfflineStore</code>.
**/
export declare class DataCatalogConfig extends SpeakeasyBase {
    catalog: string;
    database: string;
    tableName: string;
}
