import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum AddApplicationCloudWatchLoggingOptionXAmzTargetEnum {
    KinesisAnalytics20150814AddApplicationCloudWatchLoggingOption = "KinesisAnalytics_20150814.AddApplicationCloudWatchLoggingOption"
}
export declare class AddApplicationCloudWatchLoggingOptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddApplicationCloudWatchLoggingOptionXAmzTargetEnum;
}
export declare class AddApplicationCloudWatchLoggingOptionRequest extends SpeakeasyBase {
    headers: AddApplicationCloudWatchLoggingOptionHeaders;
    request: shared.AddApplicationCloudWatchLoggingOptionRequest;
}
export declare class AddApplicationCloudWatchLoggingOptionResponse extends SpeakeasyBase {
    addApplicationCloudWatchLoggingOptionResponse?: Map<string, any>;
    concurrentModificationException?: any;
    contentType: string;
    invalidArgumentException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
