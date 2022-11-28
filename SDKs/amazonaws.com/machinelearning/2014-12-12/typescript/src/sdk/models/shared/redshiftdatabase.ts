import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RedshiftDatabase
/** 
 * Describes the database details required to connect to an Amazon Redshift database.
**/
export class RedshiftDatabase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterIdentifier" })
  clusterIdentifier: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;
}
