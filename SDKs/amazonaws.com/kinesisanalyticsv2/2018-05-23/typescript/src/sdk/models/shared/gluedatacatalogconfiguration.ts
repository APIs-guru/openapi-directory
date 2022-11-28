import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GlueDataCatalogConfiguration
/** 
 * The configuration of the Glue Data Catalog that you use for Apache Flink SQL queries and table API transforms that you write in an application.
**/
export class GlueDataCatalogConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatabaseARN" })
  databaseArn: string;
}
