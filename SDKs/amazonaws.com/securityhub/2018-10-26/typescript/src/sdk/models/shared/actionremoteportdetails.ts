import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActionRemotePortDetails
/** 
 * Provides information about the remote port that was involved in an attempted network connection.
**/
export class ActionRemotePortDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=PortName" })
  portName?: string;
}
