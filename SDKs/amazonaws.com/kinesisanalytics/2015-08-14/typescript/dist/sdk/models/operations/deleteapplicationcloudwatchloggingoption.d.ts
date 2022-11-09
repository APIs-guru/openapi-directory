import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteApplicationCloudWatchLoggingOptionXAmzTargetEnum {
    KinesisAnalytics20150814DeleteApplicationCloudWatchLoggingOption = "KinesisAnalytics_20150814.DeleteApplicationCloudWatchLoggingOption"
}
export declare class DeleteApplicationCloudWatchLoggingOptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteApplicationCloudWatchLoggingOptionXAmzTargetEnum;
}
export declare class DeleteApplicationCloudWatchLoggingOptionRequest extends SpeakeasyBase {
    headers: DeleteApplicationCloudWatchLoggingOptionHeaders;
    request: shared.DeleteApplicationCloudWatchLoggingOptionRequest;
}
export declare class DeleteApplicationCloudWatchLoggingOptionResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    deleteApplicationCloudWatchLoggingOptionResponse?: Map<string, any>;
    invalidArgumentException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
