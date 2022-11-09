import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeApplicationXAmzTargetEnum {
    KinesisAnalytics20180523DescribeApplication = "KinesisAnalytics_20180523.DescribeApplication"
}
export declare class DescribeApplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeApplicationXAmzTargetEnum;
}
export declare class DescribeApplicationRequest extends SpeakeasyBase {
    headers: DescribeApplicationHeaders;
    request: shared.DescribeApplicationRequest;
}
export declare class DescribeApplicationResponse extends SpeakeasyBase {
    contentType: string;
    describeApplicationResponse?: shared.DescribeApplicationResponse;
    invalidArgumentException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
