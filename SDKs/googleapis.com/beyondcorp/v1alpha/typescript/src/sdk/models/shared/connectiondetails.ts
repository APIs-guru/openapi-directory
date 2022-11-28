import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Connection } from "./connection";



// ConnectionDetails
/** 
 * Details of the Connection.
**/
export class ConnectionDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connection" })
  connection?: Connection;

  @SpeakeasyMetadata({ data: "json, name=recentMigVms" })
  recentMigVms?: string[];
}
