import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InvalidRequestContentException
/** 
 * The request body could not be parsed as JSON.
**/
export class InvalidRequestContentException extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
