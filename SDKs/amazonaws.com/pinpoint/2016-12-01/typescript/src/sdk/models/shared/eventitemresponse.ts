import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventItemResponse
/** 
 * Provides the status code and message that result from processing an event.
**/
export class EventItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=StatusCode" })
  statusCode?: number;
}
