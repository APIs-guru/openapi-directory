import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RealtimeEndpointStatusEnum } from "./realtimeendpointstatusenum";



// RealtimeEndpointInfo
/** 
 *  Describes the real-time endpoint information for an <code>MLModel</code>.
**/
export class RealtimeEndpointInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=EndpointStatus" })
  endpointStatus?: RealtimeEndpointStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=EndpointUrl" })
  endpointUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=PeakRequestsPerSecond" })
  peakRequestsPerSecond?: number;
}
