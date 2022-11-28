import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RetentionProperties } from "./retentionproperties";
import { TableStatusEnum } from "./tablestatusenum";



// Table
/** 
 * Table represents a database table in Timestream. Tables contain one or more related time series. You can modify the retention duration of the memory store and the magnetic store for a table. 
**/
export class Table extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedTime" })
  lastUpdatedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=RetentionProperties" })
  retentionProperties?: RetentionProperties;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName?: string;

  @SpeakeasyMetadata({ data: "json, name=TableStatus" })
  tableStatus?: TableStatusEnum;
}
