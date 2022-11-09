import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeDatasetGroupXAmzTargetEnum {
    AmazonPersonalizeDescribeDatasetGroup = "AmazonPersonalize.DescribeDatasetGroup"
}
export declare class DescribeDatasetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDatasetGroupXAmzTargetEnum;
}
export declare class DescribeDatasetGroupRequest extends SpeakeasyBase {
    headers: DescribeDatasetGroupHeaders;
    request: shared.DescribeDatasetGroupRequest;
}
export declare class DescribeDatasetGroupResponse extends SpeakeasyBase {
    contentType: string;
    describeDatasetGroupResponse?: shared.DescribeDatasetGroupResponse;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
