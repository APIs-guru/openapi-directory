import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SigninResponse
/** 
 * Response when you successfully create a signin record
**/
export class SigninResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: number;
}
