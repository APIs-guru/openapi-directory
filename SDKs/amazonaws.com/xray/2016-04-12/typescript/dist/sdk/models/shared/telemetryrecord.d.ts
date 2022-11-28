import { SpeakeasyBase } from "../../../internal/utils";
import { BackendConnectionErrors } from "./backendconnectionerrors";
/**
 * <p/>
**/
export declare class TelemetryRecord extends SpeakeasyBase {
    backendConnectionErrors?: BackendConnectionErrors;
    segmentsReceivedCount?: number;
    segmentsRejectedCount?: number;
    segmentsSentCount?: number;
    segmentsSpilloverCount?: number;
    timestamp: Date;
}
