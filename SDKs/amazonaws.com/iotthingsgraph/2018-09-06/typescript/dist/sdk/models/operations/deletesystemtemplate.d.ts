import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteSystemTemplateXAmzTargetEnum {
    IotThingsGraphFrontEndServiceDeleteSystemTemplate = "IotThingsGraphFrontEndService.DeleteSystemTemplate"
}
export declare class DeleteSystemTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSystemTemplateXAmzTargetEnum;
}
export declare class DeleteSystemTemplateRequest extends SpeakeasyBase {
    headers: DeleteSystemTemplateHeaders;
    request: shared.DeleteSystemTemplateRequest;
}
export declare class DeleteSystemTemplateResponse extends SpeakeasyBase {
    contentType: string;
    deleteSystemTemplateResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    statusCode: number;
    throttlingException?: any;
}
