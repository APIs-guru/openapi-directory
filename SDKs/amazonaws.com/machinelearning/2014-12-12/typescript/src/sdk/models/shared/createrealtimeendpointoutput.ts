import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RealtimeEndpointInfo } from "./realtimeendpointinfo";



// CreateRealtimeEndpointOutput
/** 
 * <p>Represents the output of an <code>CreateRealtimeEndpoint</code> operation.</p> <p>The result contains the <code>MLModelId</code> and the endpoint information for the <code>MLModel</code>.</p> <p> <b>Note:</b> The endpoint information includes the URI of the <code>MLModel</code>; that is, the location to send online prediction requests for the specified <code>MLModel</code>.</p>
**/
export class CreateRealtimeEndpointOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MLModelId" })
  mlModelId?: string;

  @SpeakeasyMetadata({ data: "json, name=RealtimeEndpointInfo" })
  realtimeEndpointInfo?: RealtimeEndpointInfo;
}
