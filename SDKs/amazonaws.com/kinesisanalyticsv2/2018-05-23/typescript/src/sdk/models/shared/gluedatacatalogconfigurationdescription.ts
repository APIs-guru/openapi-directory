import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GlueDataCatalogConfigurationDescription
/** 
 * The configuration of the Glue Data Catalog that you use for Apache Flink SQL queries and table API transforms that you write in an application.
**/
export class GlueDataCatalogConfigurationDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatabaseARN" })
  databaseArn: string;
}
