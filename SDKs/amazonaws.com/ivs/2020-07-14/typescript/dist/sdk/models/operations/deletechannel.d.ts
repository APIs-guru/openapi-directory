import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteChannelRequestBody extends SpeakeasyBase {
    arn: string;
}
export declare class DeleteChannelRequest extends SpeakeasyBase {
    headers: DeleteChannelHeaders;
    request: DeleteChannelRequestBody;
}
export declare class DeleteChannelResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    pendingVerification?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
