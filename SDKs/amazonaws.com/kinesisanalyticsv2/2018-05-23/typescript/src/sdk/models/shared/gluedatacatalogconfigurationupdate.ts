import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GlueDataCatalogConfigurationUpdate
/** 
 * Updates to the configuration of the Glue Data Catalog that you use for SQL queries that you write in a Kinesis Data Analytics Studio notebook.
**/
export class GlueDataCatalogConfigurationUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatabaseARNUpdate" })
  databaseArnUpdate?: string;
}
