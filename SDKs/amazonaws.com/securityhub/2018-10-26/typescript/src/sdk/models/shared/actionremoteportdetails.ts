import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActionRemotePortDetails
/** 
 * Provides information about the remote port that was involved in an attempted network connection.
**/
export class ActionRemotePortDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Port" })
  port?: number;

  @Metadata({ data: "json, name=PortName" })
  portName?: string;
}
