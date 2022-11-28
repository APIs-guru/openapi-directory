import { SpeakeasyBase } from "../../../internal/utils";
import { AssumedRoleUser } from "./assumedroleuser";
import { Credentials } from "./credentials";
/**
 * Contains the response to a successful <a>AssumeRoleWithWebIdentity</a> request, including temporary Amazon Web Services credentials that can be used to make Amazon Web Services requests.
**/
export declare class AssumeRoleWithWebIdentityResponse extends SpeakeasyBase {
    assumedRoleUser?: AssumedRoleUser;
    audience?: string;
    credentials?: Credentials;
    packedPolicySize?: number;
    provider?: string;
    sourceIdentity?: string;
    subjectFromWebIdentityToken?: string;
}
