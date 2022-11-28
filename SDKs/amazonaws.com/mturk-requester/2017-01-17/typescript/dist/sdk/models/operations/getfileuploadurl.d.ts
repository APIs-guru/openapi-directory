import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetFileUploadUrlxAmzTargetEnum {
    MTurkRequesterServiceV20170117GetFileUploadUrl = "MTurkRequesterServiceV20170117.GetFileUploadURL"
}
export declare class GetFileUploadUrlHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetFileUploadUrlxAmzTargetEnum;
}
export declare class GetFileUploadUrlRequest extends SpeakeasyBase {
    headers: GetFileUploadUrlHeaders;
    request: shared.GetFileUploadUrlRequest;
}
export declare class GetFileUploadUrlResponse extends SpeakeasyBase {
    contentType: string;
    getFileUploadUrlResponse?: shared.GetFileUploadUrlResponse;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
}
