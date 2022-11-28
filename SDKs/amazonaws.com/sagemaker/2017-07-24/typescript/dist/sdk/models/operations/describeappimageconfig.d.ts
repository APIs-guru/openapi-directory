import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeAppImageConfigXAmzTargetEnum {
    SageMakerDescribeAppImageConfig = "SageMaker.DescribeAppImageConfig"
}
export declare class DescribeAppImageConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAppImageConfigXAmzTargetEnum;
}
export declare class DescribeAppImageConfigRequest extends SpeakeasyBase {
    headers: DescribeAppImageConfigHeaders;
    request: shared.DescribeAppImageConfigRequest;
}
export declare class DescribeAppImageConfigResponse extends SpeakeasyBase {
    contentType: string;
    describeAppImageConfigResponse?: shared.DescribeAppImageConfigResponse;
    resourceNotFound?: any;
    statusCode: number;
}
