import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SigninResponse
/** 
 * Response when you successfully create a signin record
**/
export class SigninResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=result" })
  result?: number;
}
