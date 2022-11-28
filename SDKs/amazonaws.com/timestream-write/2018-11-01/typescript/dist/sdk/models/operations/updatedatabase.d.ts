import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateDatabaseXAmzTargetEnum {
    Timestream20181101UpdateDatabase = "Timestream_20181101.UpdateDatabase"
}
export declare class UpdateDatabaseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDatabaseXAmzTargetEnum;
}
export declare class UpdateDatabaseRequest extends SpeakeasyBase {
    headers: UpdateDatabaseHeaders;
    request: shared.UpdateDatabaseRequest;
}
export declare class UpdateDatabaseResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    invalidEndpointException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    updateDatabaseResponse?: shared.UpdateDatabaseResponse;
    validationException?: any;
}
