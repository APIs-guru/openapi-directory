import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EventItemResponse
/** 
 * Provides the status code and message that result from processing an event.
**/
export class EventItemResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=StatusCode" })
  statusCode?: number;
}
