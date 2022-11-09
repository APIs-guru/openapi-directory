import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SignupUrl
/** 
 * An enterprise signup URL.
**/
export class SignupUrl extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
