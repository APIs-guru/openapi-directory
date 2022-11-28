import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EndpointItemResponse
/** 
 * Provides the status code and message that result from processing data for an endpoint.
**/
export class EndpointItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=StatusCode" })
  statusCode?: number;
}
