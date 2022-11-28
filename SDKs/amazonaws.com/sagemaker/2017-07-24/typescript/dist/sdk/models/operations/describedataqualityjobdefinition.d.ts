import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeDataQualityJobDefinitionXAmzTargetEnum {
    SageMakerDescribeDataQualityJobDefinition = "SageMaker.DescribeDataQualityJobDefinition"
}
export declare class DescribeDataQualityJobDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDataQualityJobDefinitionXAmzTargetEnum;
}
export declare class DescribeDataQualityJobDefinitionRequest extends SpeakeasyBase {
    headers: DescribeDataQualityJobDefinitionHeaders;
    request: shared.DescribeDataQualityJobDefinitionRequest;
}
export declare class DescribeDataQualityJobDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    describeDataQualityJobDefinitionResponse?: shared.DescribeDataQualityJobDefinitionResponse;
    resourceNotFound?: any;
    statusCode: number;
}
