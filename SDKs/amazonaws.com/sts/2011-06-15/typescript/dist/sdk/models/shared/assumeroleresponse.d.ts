import { SpeakeasyBase } from "../../../internal/utils";
import { AssumedRoleUser } from "./assumedroleuser";
import { Credentials } from "./credentials";
/**
 * Contains the response to a successful <a>AssumeRole</a> request, including temporary Amazon Web Services credentials that can be used to make Amazon Web Services requests.
**/
export declare class AssumeRoleResponse extends SpeakeasyBase {
    assumedRoleUser?: AssumedRoleUser;
    credentials?: Credentials;
    packedPolicySize?: number;
    sourceIdentity?: string;
}
