import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SignupUrl
/** 
 * An enterprise signup URL.
**/
export class SignupUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
