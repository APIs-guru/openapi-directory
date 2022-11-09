import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeprecateSystemTemplateXAmzTargetEnum {
    IotThingsGraphFrontEndServiceDeprecateSystemTemplate = "IotThingsGraphFrontEndService.DeprecateSystemTemplate"
}
export declare class DeprecateSystemTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeprecateSystemTemplateXAmzTargetEnum;
}
export declare class DeprecateSystemTemplateRequest extends SpeakeasyBase {
    headers: DeprecateSystemTemplateHeaders;
    request: shared.DeprecateSystemTemplateRequest;
}
export declare class DeprecateSystemTemplateResponse extends SpeakeasyBase {
    contentType: string;
    deprecateSystemTemplateResponse?: Map<string, any>;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
