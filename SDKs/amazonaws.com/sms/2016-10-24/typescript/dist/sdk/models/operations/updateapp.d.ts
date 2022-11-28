import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateAppXAmzTargetEnum {
    AwsServerMigrationServiceV20161024UpdateApp = "AWSServerMigrationService_V2016_10_24.UpdateApp"
}
export declare class UpdateAppHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateAppXAmzTargetEnum;
}
export declare class UpdateAppRequest extends SpeakeasyBase {
    headers: UpdateAppHeaders;
    request: shared.UpdateAppRequest;
}
export declare class UpdateAppResponse extends SpeakeasyBase {
    contentType: string;
    internalError?: any;
    invalidParameterException?: any;
    missingRequiredParameterException?: any;
    operationNotPermittedException?: any;
    statusCode: number;
    unauthorizedOperationException?: any;
    updateAppResponse?: shared.UpdateAppResponse;
}
