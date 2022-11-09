import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeApplicationVersionXAmzTargetEnum {
    KinesisAnalytics20180523DescribeApplicationVersion = "KinesisAnalytics_20180523.DescribeApplicationVersion"
}
export declare class DescribeApplicationVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeApplicationVersionXAmzTargetEnum;
}
export declare class DescribeApplicationVersionRequest extends SpeakeasyBase {
    headers: DescribeApplicationVersionHeaders;
    request: shared.DescribeApplicationVersionRequest;
}
export declare class DescribeApplicationVersionResponse extends SpeakeasyBase {
    contentType: string;
    describeApplicationVersionResponse?: shared.DescribeApplicationVersionResponse;
    invalidArgumentException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    unsupportedOperationException?: any;
}
