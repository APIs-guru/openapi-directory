import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GlueDataCatalogConfigurationUpdate
/** 
 * Updates to the configuration of the Glue Data Catalog that you use for SQL queries that you write in a Kinesis Data Analytics Studio notebook.
**/
export class GlueDataCatalogConfigurationUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatabaseARNUpdate" })
  databaseArnUpdate?: string;
}
