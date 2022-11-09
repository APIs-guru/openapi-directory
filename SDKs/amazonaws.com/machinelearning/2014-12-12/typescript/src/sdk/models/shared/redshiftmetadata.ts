import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RedshiftDatabase } from "./redshiftdatabase";


// RedshiftMetadata
/** 
 * Describes the <code>DataSource</code> details specific to Amazon Redshift.
**/
export class RedshiftMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatabaseUserName" })
  databaseUserName?: string;

  @Metadata({ data: "json, name=RedshiftDatabase" })
  redshiftDatabase?: RedshiftDatabase;

  @Metadata({ data: "json, name=SelectSqlQuery" })
  selectSqlQuery?: string;
}
