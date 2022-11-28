import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeModelQualityJobDefinitionXAmzTargetEnum {
    SageMakerDescribeModelQualityJobDefinition = "SageMaker.DescribeModelQualityJobDefinition"
}
export declare class DescribeModelQualityJobDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeModelQualityJobDefinitionXAmzTargetEnum;
}
export declare class DescribeModelQualityJobDefinitionRequest extends SpeakeasyBase {
    headers: DescribeModelQualityJobDefinitionHeaders;
    request: shared.DescribeModelQualityJobDefinitionRequest;
}
export declare class DescribeModelQualityJobDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    describeModelQualityJobDefinitionResponse?: shared.DescribeModelQualityJobDefinitionResponse;
    resourceNotFound?: any;
    statusCode: number;
}
