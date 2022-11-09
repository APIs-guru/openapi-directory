import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum TerminateAppXAmzTargetEnum {
    AwsServerMigrationServiceV20161024TerminateApp = "AWSServerMigrationService_V2016_10_24.TerminateApp"
}
export declare class TerminateAppHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TerminateAppXAmzTargetEnum;
}
export declare class TerminateAppRequest extends SpeakeasyBase {
    headers: TerminateAppHeaders;
    request: shared.TerminateAppRequest;
}
export declare class TerminateAppResponse extends SpeakeasyBase {
    contentType: string;
    internalError?: any;
    invalidParameterException?: any;
    missingRequiredParameterException?: any;
    operationNotPermittedException?: any;
    statusCode: number;
    terminateAppResponse?: Map<string, any>;
    unauthorizedOperationException?: any;
}
