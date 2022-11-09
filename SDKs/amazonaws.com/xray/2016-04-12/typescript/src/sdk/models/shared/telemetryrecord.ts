import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BackendConnectionErrors } from "./backendconnectionerrors";


// TelemetryRecord
/** 
 * <p/>
**/
export class TelemetryRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=BackendConnectionErrors" })
  backendConnectionErrors?: BackendConnectionErrors;

  @Metadata({ data: "json, name=SegmentsReceivedCount" })
  segmentsReceivedCount?: number;

  @Metadata({ data: "json, name=SegmentsRejectedCount" })
  segmentsRejectedCount?: number;

  @Metadata({ data: "json, name=SegmentsSentCount" })
  segmentsSentCount?: number;

  @Metadata({ data: "json, name=SegmentsSpilloverCount" })
  segmentsSpilloverCount?: number;

  @Metadata({ data: "json, name=Timestamp" })
  timestamp: Date;
}
