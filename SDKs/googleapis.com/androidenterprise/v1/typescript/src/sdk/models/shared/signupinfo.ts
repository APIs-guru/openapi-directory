import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SignupInfo
/** 
 * A resource returned by the GenerateSignupUrl API, which contains the Signup URL and Completion Token.
**/
export class SignupInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completionToken" })
  completionToken?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
