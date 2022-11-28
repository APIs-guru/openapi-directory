import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateStreamKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateStreamKeyRequestBody extends SpeakeasyBase {
    channelArn: string;
    tags?: Map<string, string>;
}
export declare class CreateStreamKeyRequest extends SpeakeasyBase {
    headers: CreateStreamKeyHeaders;
    request: CreateStreamKeyRequestBody;
}
export declare class CreateStreamKeyResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createStreamKeyResponse?: shared.CreateStreamKeyResponse;
    pendingVerification?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    validationException?: any;
}
