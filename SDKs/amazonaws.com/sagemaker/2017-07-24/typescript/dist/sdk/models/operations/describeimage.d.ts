import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeImageXAmzTargetEnum {
    SageMakerDescribeImage = "SageMaker.DescribeImage"
}
export declare class DescribeImageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeImageXAmzTargetEnum;
}
export declare class DescribeImageRequest extends SpeakeasyBase {
    headers: DescribeImageHeaders;
    request: shared.DescribeImageRequest;
}
export declare class DescribeImageResponse extends SpeakeasyBase {
    contentType: string;
    describeImageResponse?: shared.DescribeImageResponse;
    resourceNotFound?: any;
    statusCode: number;
}
