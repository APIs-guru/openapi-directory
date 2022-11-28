import { SpeakeasyBase } from "../../../internal/utils";
import { PortProbeDetail } from "./portprobedetail";
/**
 * Provided if <code>ActionType</code> is <code>PORT_PROBE</code>. It provides details about the attempted port probe that was detected.
**/
export declare class PortProbeAction extends SpeakeasyBase {
    blocked?: boolean;
    portProbeDetails?: PortProbeDetail[];
}
