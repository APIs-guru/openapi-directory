import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListAppsXAmzTargetEnum {
    AwsServerMigrationServiceV20161024ListApps = "AWSServerMigrationService_V2016_10_24.ListApps"
}
export declare class ListAppsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAppsXAmzTargetEnum;
}
export declare class ListAppsRequest extends SpeakeasyBase {
    headers: ListAppsHeaders;
    request: shared.ListAppsRequest;
}
export declare class ListAppsResponse extends SpeakeasyBase {
    contentType: string;
    internalError?: any;
    invalidParameterException?: any;
    listAppsResponse?: shared.ListAppsResponse;
    missingRequiredParameterException?: any;
    operationNotPermittedException?: any;
    statusCode: number;
    unauthorizedOperationException?: any;
}
