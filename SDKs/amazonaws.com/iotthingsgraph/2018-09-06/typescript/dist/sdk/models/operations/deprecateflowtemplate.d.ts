import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeprecateFlowTemplateXAmzTargetEnum {
    IotThingsGraphFrontEndServiceDeprecateFlowTemplate = "IotThingsGraphFrontEndService.DeprecateFlowTemplate"
}
export declare class DeprecateFlowTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeprecateFlowTemplateXAmzTargetEnum;
}
export declare class DeprecateFlowTemplateRequest extends SpeakeasyBase {
    headers: DeprecateFlowTemplateHeaders;
    request: shared.DeprecateFlowTemplateRequest;
}
export declare class DeprecateFlowTemplateResponse extends SpeakeasyBase {
    contentType: string;
    deprecateFlowTemplateResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
