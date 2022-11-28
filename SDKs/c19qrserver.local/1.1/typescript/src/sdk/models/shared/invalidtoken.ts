import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InvalidToken
/** 
 * Invalid token
**/
export class InvalidToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
