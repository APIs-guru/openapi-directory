import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteStreamKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteStreamKeyRequestBody extends SpeakeasyBase {
    arn: string;
}
export declare class DeleteStreamKeyRequest extends SpeakeasyBase {
    headers: DeleteStreamKeyHeaders;
    request: DeleteStreamKeyRequestBody;
}
export declare class DeleteStreamKeyResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    pendingVerification?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
