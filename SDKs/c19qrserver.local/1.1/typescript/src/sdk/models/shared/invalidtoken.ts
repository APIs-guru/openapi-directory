import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InvalidToken
/** 
 * Invalid token
**/
export class InvalidToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}
