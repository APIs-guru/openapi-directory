import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum AddApplicationCloudWatchLoggingOptionXAmzTargetEnum {
    KinesisAnalytics20180523AddApplicationCloudWatchLoggingOption = "KinesisAnalytics_20180523.AddApplicationCloudWatchLoggingOption"
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
    addApplicationCloudWatchLoggingOptionResponse?: shared.AddApplicationCloudWatchLoggingOptionResponse;
    concurrentModificationException?: any;
    contentType: string;
    invalidApplicationConfigurationException?: any;
    invalidArgumentException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
