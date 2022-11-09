import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateFlowTemplateXAmzTargetEnum {
    IotThingsGraphFrontEndServiceCreateFlowTemplate = "IotThingsGraphFrontEndService.CreateFlowTemplate"
}
export declare class CreateFlowTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateFlowTemplateXAmzTargetEnum;
}
export declare class CreateFlowTemplateRequest extends SpeakeasyBase {
    headers: CreateFlowTemplateHeaders;
    request: shared.CreateFlowTemplateRequest;
}
export declare class CreateFlowTemplateResponse extends SpeakeasyBase {
    contentType: string;
    createFlowTemplateResponse?: shared.CreateFlowTemplateResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    statusCode: number;
    throttlingException?: any;
}
