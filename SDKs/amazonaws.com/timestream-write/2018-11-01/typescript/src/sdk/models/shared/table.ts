import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RetentionProperties } from "./retentionproperties";
import { TableStatusEnum } from "./tablestatusenum";


// Table
/** 
 * Table represents a database table in Timestream. Tables contain one or more related time series. You can modify the retention duration of the memory store and the magnetic store for a table. 
**/
export class Table extends SpeakeasyBase {
  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @Metadata({ data: "json, name=LastUpdatedTime" })
  lastUpdatedTime?: Date;

  @Metadata({ data: "json, name=RetentionProperties" })
  retentionProperties?: RetentionProperties;

  @Metadata({ data: "json, name=TableName" })
  tableName?: string;

  @Metadata({ data: "json, name=TableStatus" })
  tableStatus?: TableStatusEnum;
}
