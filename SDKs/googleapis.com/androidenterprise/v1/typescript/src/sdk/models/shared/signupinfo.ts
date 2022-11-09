import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SignupInfo
/** 
 * A resource returned by the GenerateSignupUrl API, which contains the Signup URL and Completion Token.
**/
export class SignupInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=completionToken" })
  completionToken?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
