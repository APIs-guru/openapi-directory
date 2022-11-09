import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GlueDataCatalogConfiguration
/** 
 * The configuration of the Glue Data Catalog that you use for Apache Flink SQL queries and table API transforms that you write in an application.
**/
export class GlueDataCatalogConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatabaseARN" })
  databaseArn: string;
}
