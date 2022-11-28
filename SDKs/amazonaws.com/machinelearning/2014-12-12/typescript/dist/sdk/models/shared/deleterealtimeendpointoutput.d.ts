import { SpeakeasyBase } from "../../../internal/utils";
import { RealtimeEndpointInfo } from "./realtimeendpointinfo";
/**
 * <p>Represents the output of an <code>DeleteRealtimeEndpoint</code> operation.</p> <p>The result contains the <code>MLModelId</code> and the endpoint information for the <code>MLModel</code>. </p>
**/
export declare class DeleteRealtimeEndpointOutput extends SpeakeasyBase {
    mlModelId?: string;
    realtimeEndpointInfo?: RealtimeEndpointInfo;
}
