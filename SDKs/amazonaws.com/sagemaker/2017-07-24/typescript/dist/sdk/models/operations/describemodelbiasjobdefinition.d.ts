import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeModelBiasJobDefinitionXAmzTargetEnum {
    SageMakerDescribeModelBiasJobDefinition = "SageMaker.DescribeModelBiasJobDefinition"
}
export declare class DescribeModelBiasJobDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeModelBiasJobDefinitionXAmzTargetEnum;
}
export declare class DescribeModelBiasJobDefinitionRequest extends SpeakeasyBase {
    headers: DescribeModelBiasJobDefinitionHeaders;
    request: shared.DescribeModelBiasJobDefinitionRequest;
}
export declare class DescribeModelBiasJobDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    describeModelBiasJobDefinitionResponse?: shared.DescribeModelBiasJobDefinitionResponse;
    resourceNotFound?: any;
    statusCode: number;
}
