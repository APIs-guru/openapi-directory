import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStreamKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetStreamKeyRequestBody extends SpeakeasyBase {
    arn: string;
}
export declare class GetStreamKeyRequest extends SpeakeasyBase {
    headers: GetStreamKeyHeaders;
    request: GetStreamKeyRequestBody;
}
export declare class GetStreamKeyResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getStreamKeyResponse?: shared.GetStreamKeyResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
