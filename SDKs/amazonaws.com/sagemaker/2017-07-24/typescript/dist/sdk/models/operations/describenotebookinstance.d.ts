import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeNotebookInstanceXAmzTargetEnum {
    SageMakerDescribeNotebookInstance = "SageMaker.DescribeNotebookInstance"
}
export declare class DescribeNotebookInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeNotebookInstanceXAmzTargetEnum;
}
export declare class DescribeNotebookInstanceRequest extends SpeakeasyBase {
    headers: DescribeNotebookInstanceHeaders;
    request: shared.DescribeNotebookInstanceInput;
}
export declare class DescribeNotebookInstanceResponse extends SpeakeasyBase {
    contentType: string;
    describeNotebookInstanceOutput?: shared.DescribeNotebookInstanceOutput;
    statusCode: number;
}
