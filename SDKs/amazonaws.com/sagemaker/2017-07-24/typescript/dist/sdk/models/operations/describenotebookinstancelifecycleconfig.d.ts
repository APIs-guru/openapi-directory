import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeNotebookInstanceLifecycleConfigXAmzTargetEnum {
    SageMakerDescribeNotebookInstanceLifecycleConfig = "SageMaker.DescribeNotebookInstanceLifecycleConfig"
}
export declare class DescribeNotebookInstanceLifecycleConfigHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeNotebookInstanceLifecycleConfigXAmzTargetEnum;
}
export declare class DescribeNotebookInstanceLifecycleConfigRequest extends SpeakeasyBase {
    headers: DescribeNotebookInstanceLifecycleConfigHeaders;
    request: shared.DescribeNotebookInstanceLifecycleConfigInput;
}
export declare class DescribeNotebookInstanceLifecycleConfigResponse extends SpeakeasyBase {
    contentType: string;
    describeNotebookInstanceLifecycleConfigOutput?: shared.DescribeNotebookInstanceLifecycleConfigOutput;
    statusCode: number;
}
