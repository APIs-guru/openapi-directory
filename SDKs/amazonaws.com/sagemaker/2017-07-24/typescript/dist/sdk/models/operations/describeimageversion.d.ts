import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeImageVersionXAmzTargetEnum {
    SageMakerDescribeImageVersion = "SageMaker.DescribeImageVersion"
}
export declare class DescribeImageVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeImageVersionXAmzTargetEnum;
}
export declare class DescribeImageVersionRequest extends SpeakeasyBase {
    headers: DescribeImageVersionHeaders;
    request: shared.DescribeImageVersionRequest;
}
export declare class DescribeImageVersionResponse extends SpeakeasyBase {
    contentType: string;
    describeImageVersionResponse?: shared.DescribeImageVersionResponse;
    resourceNotFound?: any;
    statusCode: number;
}
