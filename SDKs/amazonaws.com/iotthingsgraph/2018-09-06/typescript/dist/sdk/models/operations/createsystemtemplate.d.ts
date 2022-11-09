import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateSystemTemplateXAmzTargetEnum {
    IotThingsGraphFrontEndServiceCreateSystemTemplate = "IotThingsGraphFrontEndService.CreateSystemTemplate"
}
export declare class CreateSystemTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateSystemTemplateXAmzTargetEnum;
}
export declare class CreateSystemTemplateRequest extends SpeakeasyBase {
    headers: CreateSystemTemplateHeaders;
    request: shared.CreateSystemTemplateRequest;
}
export declare class CreateSystemTemplateResponse extends SpeakeasyBase {
    contentType: string;
    createSystemTemplateResponse?: shared.CreateSystemTemplateResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceAlreadyExistsException?: any;
    statusCode: number;
    throttlingException?: any;
}
