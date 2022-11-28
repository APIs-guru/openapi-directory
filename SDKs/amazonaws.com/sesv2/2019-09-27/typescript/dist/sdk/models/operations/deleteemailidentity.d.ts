import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteEmailIdentityPathParams extends SpeakeasyBase {
    emailIdentity: string;
}
export declare class DeleteEmailIdentityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteEmailIdentityRequest extends SpeakeasyBase {
    pathParams: DeleteEmailIdentityPathParams;
    headers: DeleteEmailIdentityHeaders;
}
export declare class DeleteEmailIdentityResponse extends SpeakeasyBase {
    badRequestException?: any;
    concurrentModificationException?: any;
    contentType: string;
    deleteEmailIdentityResponse?: Map<string, any>;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
