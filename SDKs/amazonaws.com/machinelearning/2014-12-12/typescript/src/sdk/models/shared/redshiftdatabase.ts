import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RedshiftDatabase
/** 
 * Describes the database details required to connect to an Amazon Redshift database.
**/
export class RedshiftDatabase extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterIdentifier" })
  clusterIdentifier: string;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName: string;
}
