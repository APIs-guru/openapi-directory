import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetUploadStatusXAmzTargetEnum {
    IotThingsGraphFrontEndServiceGetUploadStatus = "IotThingsGraphFrontEndService.GetUploadStatus"
}
export declare class GetUploadStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetUploadStatusXAmzTargetEnum;
}
export declare class GetUploadStatusRequest extends SpeakeasyBase {
    headers: GetUploadStatusHeaders;
    request: shared.GetUploadStatusRequest;
}
export declare class GetUploadStatusResponse extends SpeakeasyBase {
    contentType: string;
    getUploadStatusResponse?: shared.GetUploadStatusResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
