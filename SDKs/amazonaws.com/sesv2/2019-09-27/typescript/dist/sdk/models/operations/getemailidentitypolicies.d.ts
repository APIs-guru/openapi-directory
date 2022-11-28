import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEmailIdentityPoliciesPathParams extends SpeakeasyBase {
    emailIdentity: string;
}
export declare class GetEmailIdentityPoliciesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEmailIdentityPoliciesRequest extends SpeakeasyBase {
    pathParams: GetEmailIdentityPoliciesPathParams;
    headers: GetEmailIdentityPoliciesHeaders;
}
export declare class GetEmailIdentityPoliciesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getEmailIdentityPoliciesResponse?: shared.GetEmailIdentityPoliciesResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
