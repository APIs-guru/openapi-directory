import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BadRequestException
/** 
 * An exception object returned when a request fails.
**/
export class BadRequestException extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}
