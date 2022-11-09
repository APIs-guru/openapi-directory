import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EndpointResponse } from "./endpointresponse";


// EndpointsResponse
/** 
 * Provides information about all the endpoints that are associated with a user ID.
**/
export class EndpointsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Item", elemType: shared.EndpointResponse })
  item: EndpointResponse[];
}
