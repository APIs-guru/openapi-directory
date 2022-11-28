import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeStudioLifecycleConfigXAmzTargetEnum {
    SageMakerDescribeStudioLifecycleConfig = "SageMaker.DescribeStudioLifecycleConfig"
}
export declare class DescribeStudioLifecycleConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeStudioLifecycleConfigXAmzTargetEnum;
}
export declare class DescribeStudioLifecycleConfigRequest extends SpeakeasyBase {
    headers: DescribeStudioLifecycleConfigHeaders;
    request: shared.DescribeStudioLifecycleConfigRequest;
}
export declare class DescribeStudioLifecycleConfigResponse extends SpeakeasyBase {
    contentType: string;
    describeStudioLifecycleConfigResponse?: shared.DescribeStudioLifecycleConfigResponse;
    resourceNotFound?: any;
    statusCode: number;
}
