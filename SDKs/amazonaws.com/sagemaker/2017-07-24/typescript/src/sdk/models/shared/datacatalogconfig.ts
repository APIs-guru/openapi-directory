import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DataCatalogConfig
/** 
 * The meta data of the Glue table which serves as data catalog for the <code>OfflineStore</code>. 
**/
export class DataCatalogConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=Catalog" })
  catalog: string;

  @Metadata({ data: "json, name=Database" })
  database: string;

  @Metadata({ data: "json, name=TableName" })
  tableName: string;
}
