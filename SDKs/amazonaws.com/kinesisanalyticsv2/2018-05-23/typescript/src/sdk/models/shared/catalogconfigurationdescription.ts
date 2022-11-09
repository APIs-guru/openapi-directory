import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GlueDataCatalogConfigurationDescription } from "./gluedatacatalogconfigurationdescription";


// CatalogConfigurationDescription
/** 
 * The configuration parameters for the default AWS Glue database. You use this database for Apache Flink SQL queries and table API transforms that you write in a Kinesis Data Analytics Studio notebook.
**/
export class CatalogConfigurationDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=GlueDataCatalogConfigurationDescription" })
  glueDataCatalogConfigurationDescription: GlueDataCatalogConfigurationDescription;
}
