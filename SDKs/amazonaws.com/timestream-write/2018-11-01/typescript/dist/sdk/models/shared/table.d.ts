import { SpeakeasyBase } from "../../../internal/utils";
import { RetentionProperties } from "./retentionproperties";
import { TableStatusEnum } from "./tablestatusenum";
/**
 * Table represents a database table in Timestream. Tables contain one or more related time series. You can modify the retention duration of the memory store and the magnetic store for a table.
**/
export declare class Table extends SpeakeasyBase {
    arn?: string;
    creationTime?: Date;
    databaseName?: string;
    lastUpdatedTime?: Date;
    retentionProperties?: RetentionProperties;
    tableName?: string;
    tableStatus?: TableStatusEnum;
}
