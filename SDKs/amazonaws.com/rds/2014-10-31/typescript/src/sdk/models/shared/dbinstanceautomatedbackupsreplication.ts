import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DbInstanceAutomatedBackupsReplication
/** 
 * Automated backups of a DB instance replicated to another Amazon Web Services Region. They consist of system backups, transaction logs, and database instance properties.
**/
export class DbInstanceAutomatedBackupsReplication extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbInstanceAutomatedBackupsArn?: string;
}
