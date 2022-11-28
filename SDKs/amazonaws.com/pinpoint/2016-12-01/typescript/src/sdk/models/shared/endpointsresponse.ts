import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointResponse } from "./endpointresponse";



// EndpointsResponse
/** 
 * Provides information about all the endpoints that are associated with a user ID.
**/
export class EndpointsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Item", elemType: EndpointResponse })
  item: EndpointResponse[];
}
