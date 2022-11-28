import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains the response to a successful <a>GetCallerIdentity</a> request, including information about the entity making the request.
**/
export declare class GetCallerIdentityResponse extends SpeakeasyBase {
    account?: string;
    arn?: string;
    userId?: string;
}
