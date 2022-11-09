import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EndpointItemResponse
/** 
 * Provides the status code and message that result from processing data for an endpoint.
**/
export class EndpointItemResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=StatusCode" })
  statusCode?: number;
}
