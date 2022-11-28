import { SpeakeasyBase } from "../../../internal/utils";
import { AssumedRoleUser } from "./assumedroleuser";
import { Credentials } from "./credentials";
/**
 * Contains the response to a successful <a>AssumeRoleWithSAML</a> request, including temporary Amazon Web Services credentials that can be used to make Amazon Web Services requests.
**/
export declare class AssumeRoleWithSamlResponse extends SpeakeasyBase {
    assumedRoleUser?: AssumedRoleUser;
    audience?: string;
    credentials?: Credentials;
    issuer?: string;
    nameQualifier?: string;
    packedPolicySize?: number;
    sourceIdentity?: string;
    subject?: string;
    subjectType?: string;
}
