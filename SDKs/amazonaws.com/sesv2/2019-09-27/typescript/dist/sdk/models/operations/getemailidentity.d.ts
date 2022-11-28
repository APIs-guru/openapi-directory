import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEmailIdentityPathParams extends SpeakeasyBase {
    emailIdentity: string;
}
export declare class GetEmailIdentityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEmailIdentityRequest extends SpeakeasyBase {
    pathParams: GetEmailIdentityPathParams;
    headers: GetEmailIdentityHeaders;
}
export declare class GetEmailIdentityResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getEmailIdentityResponse?: shared.GetEmailIdentityResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
