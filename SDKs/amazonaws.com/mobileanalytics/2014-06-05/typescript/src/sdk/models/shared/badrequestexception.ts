import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BadRequestException
/** 
 * An exception object returned when a request fails.
**/
export class BadRequestException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
