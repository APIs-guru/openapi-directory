import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateApplicationPresignedUrlXAmzTargetEnum {
    KinesisAnalytics20180523CreateApplicationPresignedUrl = "KinesisAnalytics_20180523.CreateApplicationPresignedUrl"
}
export declare class CreateApplicationPresignedUrlHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateApplicationPresignedUrlXAmzTargetEnum;
}
export declare class CreateApplicationPresignedUrlRequest extends SpeakeasyBase {
    headers: CreateApplicationPresignedUrlHeaders;
    request: shared.CreateApplicationPresignedUrlRequest;
}
export declare class CreateApplicationPresignedUrlResponse extends SpeakeasyBase {
    contentType: string;
    createApplicationPresignedUrlResponse?: shared.CreateApplicationPresignedUrlResponse;
    invalidArgumentException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
