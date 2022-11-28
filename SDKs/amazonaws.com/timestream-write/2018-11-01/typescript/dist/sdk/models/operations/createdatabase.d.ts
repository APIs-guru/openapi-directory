import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateDatabaseXAmzTargetEnum {
    Timestream20181101CreateDatabase = "Timestream_20181101.CreateDatabase"
}
export declare class CreateDatabaseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDatabaseXAmzTargetEnum;
}
export declare class CreateDatabaseRequest extends SpeakeasyBase {
    headers: CreateDatabaseHeaders;
    request: shared.CreateDatabaseRequest;
}
export declare class CreateDatabaseResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createDatabaseResponse?: shared.CreateDatabaseResponse;
    internalServerException?: any;
    invalidEndpointException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
