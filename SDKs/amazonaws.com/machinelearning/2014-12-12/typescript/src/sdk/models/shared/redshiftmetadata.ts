import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RedshiftDatabase } from "./redshiftdatabase";



// RedshiftMetadata
/** 
 * Describes the <code>DataSource</code> details specific to Amazon Redshift.
**/
export class RedshiftMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatabaseUserName" })
  databaseUserName?: string;

  @SpeakeasyMetadata({ data: "json, name=RedshiftDatabase" })
  redshiftDatabase?: RedshiftDatabase;

  @SpeakeasyMetadata({ data: "json, name=SelectSqlQuery" })
  selectSqlQuery?: string;
}
