import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetAppValidationOutputXAmzTargetEnum {
    AwsServerMigrationServiceV20161024GetAppValidationOutput = "AWSServerMigrationService_V2016_10_24.GetAppValidationOutput"
}
export declare class GetAppValidationOutputHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAppValidationOutputXAmzTargetEnum;
}
export declare class GetAppValidationOutputRequest extends SpeakeasyBase {
    headers: GetAppValidationOutputHeaders;
    request: shared.GetAppValidationOutputRequest;
}
export declare class GetAppValidationOutputResponse extends SpeakeasyBase {
    contentType: string;
    getAppValidationOutputResponse?: shared.GetAppValidationOutputResponse;
    internalError?: any;
    invalidParameterException?: any;
    missingRequiredParameterException?: any;
    operationNotPermittedException?: any;
    statusCode: number;
    unauthorizedOperationException?: any;
}
