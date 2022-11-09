import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InvalidRequestContentException
/** 
 * The request body could not be parsed as JSON.
**/
export class InvalidRequestContentException extends SpeakeasyBase {
  @Metadata({ data: "json, name=Type" })
  type?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}
