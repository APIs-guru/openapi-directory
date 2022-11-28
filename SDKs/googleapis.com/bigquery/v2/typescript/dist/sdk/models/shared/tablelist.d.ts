import { SpeakeasyBase } from "../../../internal/utils";
import { Clustering } from "./clustering";
import { RangePartitioning } from "./rangepartitioning";
import { TableReference } from "./tablereference";
import { TimePartitioning } from "./timepartitioning";
/**
 * Additional details for a view.
**/
export declare class TableListTablesView extends SpeakeasyBase {
    useLegacySql?: boolean;
}
export declare class TableListTables extends SpeakeasyBase {
    clustering?: Clustering;
    creationTime?: string;
    expirationTime?: string;
    friendlyName?: string;
    id?: string;
    kind?: string;
    labels?: Map<string, string>;
    rangePartitioning?: RangePartitioning;
    tableReference?: TableReference;
    timePartitioning?: TimePartitioning;
    type?: string;
    view?: TableListTablesView;
}
export declare class TableList extends SpeakeasyBase {
    etag?: string;
    kind?: string;
    nextPageToken?: string;
    tables?: TableListTables[];
    totalItems?: number;
}
