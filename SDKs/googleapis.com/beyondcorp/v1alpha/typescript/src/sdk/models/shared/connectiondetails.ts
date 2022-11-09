import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Connection } from "./connection";


// ConnectionDetails
/** 
 * Details of the Connection.
**/
export class ConnectionDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=connection" })
  connection?: Connection;

  @Metadata({ data: "json, name=recentMigVms" })
  recentMigVms?: string[];
}
