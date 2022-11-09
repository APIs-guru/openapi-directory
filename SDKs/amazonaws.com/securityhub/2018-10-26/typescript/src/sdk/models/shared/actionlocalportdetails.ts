import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActionLocalPortDetails
/** 
 * For <code>NetworkConnectionAction</code> and <code>PortProbeDetails</code>, <code>LocalPortDetails</code> provides information about the local port that was involved in the action.
**/
export class ActionLocalPortDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Port" })
  port?: number;

  @Metadata({ data: "json, name=PortName" })
  portName?: string;
}
