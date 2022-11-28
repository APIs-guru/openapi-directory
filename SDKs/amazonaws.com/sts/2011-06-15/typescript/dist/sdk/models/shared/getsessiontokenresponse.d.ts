import { SpeakeasyBase } from "../../../internal/utils";
import { Credentials } from "./credentials";
/**
 * Contains the response to a successful <a>GetSessionToken</a> request, including temporary Amazon Web Services credentials that can be used to make Amazon Web Services requests.
**/
export declare class GetSessionTokenResponse extends SpeakeasyBase {
    credentials?: Credentials;
}
