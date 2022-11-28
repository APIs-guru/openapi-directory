import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAppXAmzTargetEnum {
    AwsServerMigrationServiceV20161024GetApp = "AWSServerMigrationService_V2016_10_24.GetApp"
}
export declare class GetAppHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAppXAmzTargetEnum;
}
export declare class GetAppRequest extends SpeakeasyBase {
    headers: GetAppHeaders;
    request: shared.GetAppRequest;
}
export declare class GetAppResponse extends SpeakeasyBase {
    contentType: string;
    getAppResponse?: shared.GetAppResponse;
    internalError?: any;
    invalidParameterException?: any;
    missingRequiredParameterException?: any;
    operationNotPermittedException?: any;
    statusCode: number;
    unauthorizedOperationException?: any;
}
