import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RealtimeEndpointStatusEnum } from "./realtimeendpointstatusenum";
/**
 *  Describes the real-time endpoint information for an <code>MLModel</code>.
**/
export declare class RealtimeEndpointInfo extends SpeakeasyBase {
    createdAt?: Date;
    endpointStatus?: RealtimeEndpointStatusEnum;
    endpointUrl?: string;
    peakRequestsPerSecond?: number;
}
