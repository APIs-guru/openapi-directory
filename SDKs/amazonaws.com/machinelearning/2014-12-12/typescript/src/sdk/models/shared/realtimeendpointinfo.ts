import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RealtimeEndpointStatusEnum } from "./realtimeendpointstatusenum";


// RealtimeEndpointInfo
/** 
 *  Describes the real-time endpoint information for an <code>MLModel</code>.
**/
export class RealtimeEndpointInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=EndpointStatus" })
  endpointStatus?: RealtimeEndpointStatusEnum;

  @Metadata({ data: "json, name=EndpointUrl" })
  endpointUrl?: string;

  @Metadata({ data: "json, name=PeakRequestsPerSecond" })
  peakRequestsPerSecond?: number;
}
