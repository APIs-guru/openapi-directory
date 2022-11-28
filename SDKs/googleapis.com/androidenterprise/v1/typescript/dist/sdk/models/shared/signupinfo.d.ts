import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A resource returned by the GenerateSignupUrl API, which contains the Signup URL and Completion Token.
**/
export declare class SignupInfo extends SpeakeasyBase {
    completionToken?: string;
    kind?: string;
    url?: string;
}
