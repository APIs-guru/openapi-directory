import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum NotifyAppValidationOutputXAmzTargetEnum {
    AwsServerMigrationServiceV20161024NotifyAppValidationOutput = "AWSServerMigrationService_V2016_10_24.NotifyAppValidationOutput"
}
export declare class NotifyAppValidationOutputHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: NotifyAppValidationOutputXAmzTargetEnum;
}
export declare class NotifyAppValidationOutputRequest extends SpeakeasyBase {
    headers: NotifyAppValidationOutputHeaders;
    request: shared.NotifyAppValidationOutputRequest;
}
export declare class NotifyAppValidationOutputResponse extends SpeakeasyBase {
    contentType: string;
    internalError?: any;
    invalidParameterException?: any;
    missingRequiredParameterException?: any;
    notifyAppValidationOutputResponse?: Map<string, any>;
    operationNotPermittedException?: any;
    statusCode: number;
    unauthorizedOperationException?: any;
}
