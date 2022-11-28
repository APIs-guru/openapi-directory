import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PortProbeDetail } from "./portprobedetail";



// PortProbeAction
/** 
 * Provided if <code>ActionType</code> is <code>PORT_PROBE</code>. It provides details about the attempted port probe that was detected.
**/
export class PortProbeAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Blocked" })
  blocked?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PortProbeDetails", elemType: PortProbeDetail })
  portProbeDetails?: PortProbeDetail[];
}
