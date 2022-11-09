import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RealtimeEndpointInfo } from "./realtimeendpointinfo";
/**
 * <p>Represents the output of an <code>CreateRealtimeEndpoint</code> operation.</p> <p>The result contains the <code>MLModelId</code> and the endpoint information for the <code>MLModel</code>.</p> <p> <b>Note:</b> The endpoint information includes the URI of the <code>MLModel</code>; that is, the location to send online prediction requests for the specified <code>MLModel</code>.</p>
**/
export declare class CreateRealtimeEndpointOutput extends SpeakeasyBase {
    mlModelId?: string;
    realtimeEndpointInfo?: RealtimeEndpointInfo;
}
