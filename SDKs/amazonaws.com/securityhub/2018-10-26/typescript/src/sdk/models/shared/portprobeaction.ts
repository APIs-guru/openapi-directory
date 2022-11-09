import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PortProbeDetail } from "./portprobedetail";


// PortProbeAction
/** 
 * Provided if <code>ActionType</code> is <code>PORT_PROBE</code>. It provides details about the attempted port probe that was detected.
**/
export class PortProbeAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=Blocked" })
  blocked?: boolean;

  @Metadata({ data: "json, name=PortProbeDetails", elemType: shared.PortProbeDetail })
  portProbeDetails?: PortProbeDetail[];
}
