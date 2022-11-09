import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum LaunchAppXAmzTargetEnum {
    AwsServerMigrationServiceV20161024LaunchApp = "AWSServerMigrationService_V2016_10_24.LaunchApp"
}
export declare class LaunchAppHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: LaunchAppXAmzTargetEnum;
}
export declare class LaunchAppRequest extends SpeakeasyBase {
    headers: LaunchAppHeaders;
    request: shared.LaunchAppRequest;
}
export declare class LaunchAppResponse extends SpeakeasyBase {
    contentType: string;
    internalError?: any;
    invalidParameterException?: any;
    launchAppResponse?: Map<string, any>;
    missingRequiredParameterException?: any;
    operationNotPermittedException?: any;
    statusCode: number;
    unauthorizedOperationException?: any;
}
