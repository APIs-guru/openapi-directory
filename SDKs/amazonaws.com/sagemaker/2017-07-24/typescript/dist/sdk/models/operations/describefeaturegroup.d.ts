import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeFeatureGroupXAmzTargetEnum {
    SageMakerDescribeFeatureGroup = "SageMaker.DescribeFeatureGroup"
}
export declare class DescribeFeatureGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeFeatureGroupXAmzTargetEnum;
}
export declare class DescribeFeatureGroupRequest extends SpeakeasyBase {
    headers: DescribeFeatureGroupHeaders;
    request: shared.DescribeFeatureGroupRequest;
}
export declare class DescribeFeatureGroupResponse extends SpeakeasyBase {
    contentType: string;
    describeFeatureGroupResponse?: shared.DescribeFeatureGroupResponse;
    resourceNotFound?: any;
    statusCode: number;
}
