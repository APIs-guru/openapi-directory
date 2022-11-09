import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GenerateChangeSetXAmzTargetEnum {
    AwsServerMigrationServiceV20161024GenerateChangeSet = "AWSServerMigrationService_V2016_10_24.GenerateChangeSet"
}
export declare class GenerateChangeSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GenerateChangeSetXAmzTargetEnum;
}
export declare class GenerateChangeSetRequest extends SpeakeasyBase {
    headers: GenerateChangeSetHeaders;
    request: shared.GenerateChangeSetRequest;
}
export declare class GenerateChangeSetResponse extends SpeakeasyBase {
    contentType: string;
    generateChangeSetResponse?: shared.GenerateChangeSetResponse;
    internalError?: any;
    invalidParameterException?: any;
    missingRequiredParameterException?: any;
    operationNotPermittedException?: any;
    statusCode: number;
    unauthorizedOperationException?: any;
}
