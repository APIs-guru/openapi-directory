import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GlueDataCatalogConfiguration } from "./gluedatacatalogconfiguration";


// CatalogConfiguration
/** 
 * The configuration parameters for the default AWS Glue database. You use this database for SQL queries that you write in a Kinesis Data Analytics Studio notebook.
**/
export class CatalogConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=GlueDataCatalogConfiguration" })
  glueDataCatalogConfiguration: GlueDataCatalogConfiguration;
}
