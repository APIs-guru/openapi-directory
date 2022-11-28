import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GenerateTemplateXAmzTargetEnum {
    AwsServerMigrationServiceV20161024GenerateTemplate = "AWSServerMigrationService_V2016_10_24.GenerateTemplate"
}
export declare class GenerateTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GenerateTemplateXAmzTargetEnum;
}
export declare class GenerateTemplateRequest extends SpeakeasyBase {
    headers: GenerateTemplateHeaders;
    request: shared.GenerateTemplateRequest;
}
export declare class GenerateTemplateResponse extends SpeakeasyBase {
    contentType: string;
    generateTemplateResponse?: shared.GenerateTemplateResponse;
    internalError?: any;
    invalidParameterException?: any;
    missingRequiredParameterException?: any;
    operationNotPermittedException?: any;
    statusCode: number;
    unauthorizedOperationException?: any;
}
