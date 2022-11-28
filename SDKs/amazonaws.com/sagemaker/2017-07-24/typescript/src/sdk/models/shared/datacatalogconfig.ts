import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DataCatalogConfig
/** 
 * The meta data of the Glue table which serves as data catalog for the <code>OfflineStore</code>. 
**/
export class DataCatalogConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Catalog" })
  catalog: string;

  @SpeakeasyMetadata({ data: "json, name=Database" })
  database: string;

  @SpeakeasyMetadata({ data: "json, name=TableName" })
  tableName: string;
}
