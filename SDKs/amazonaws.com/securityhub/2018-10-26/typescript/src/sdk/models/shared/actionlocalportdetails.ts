import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActionLocalPortDetails
/** 
 * For <code>NetworkConnectionAction</code> and <code>PortProbeDetails</code>, <code>LocalPortDetails</code> provides information about the local port that was involved in the action.
**/
export class ActionLocalPortDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Port" })
  port?: number;

  @SpeakeasyMetadata({ data: "json, name=PortName" })
  portName?: string;
}
