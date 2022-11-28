import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RealtimeEndpointInfo } from "./realtimeendpointinfo";



// DeleteRealtimeEndpointOutput
/** 
 * <p>Represents the output of an <code>DeleteRealtimeEndpoint</code> operation.</p> <p>The result contains the <code>MLModelId</code> and the endpoint information for the <code>MLModel</code>. </p>
**/
export class DeleteRealtimeEndpointOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MLModelId" })
  mlModelId?: string;

  @SpeakeasyMetadata({ data: "json, name=RealtimeEndpointInfo" })
  realtimeEndpointInfo?: RealtimeEndpointInfo;
}
