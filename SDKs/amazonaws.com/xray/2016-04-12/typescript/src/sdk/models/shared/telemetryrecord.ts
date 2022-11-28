import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BackendConnectionErrors } from "./backendconnectionerrors";



// TelemetryRecord
/** 
 * <p/>
**/
export class TelemetryRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BackendConnectionErrors" })
  backendConnectionErrors?: BackendConnectionErrors;

  @SpeakeasyMetadata({ data: "json, name=SegmentsReceivedCount" })
  segmentsReceivedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=SegmentsRejectedCount" })
  segmentsRejectedCount?: number;

  @SpeakeasyMetadata({ data: "json, name=SegmentsSentCount" })
  segmentsSentCount?: number;

  @SpeakeasyMetadata({ data: "json, name=SegmentsSpilloverCount" })
  segmentsSpilloverCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp: Date;
}
