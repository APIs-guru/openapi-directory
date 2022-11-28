import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateTableXAmzTargetEnum {
    Timestream20181101CreateTable = "Timestream_20181101.CreateTable"
}
export declare class CreateTableHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTableXAmzTargetEnum;
}
export declare class CreateTableRequest extends SpeakeasyBase {
    headers: CreateTableHeaders;
    request: shared.CreateTableRequest;
}
export declare class CreateTableResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createTableResponse?: shared.CreateTableResponse;
    internalServerException?: any;
    invalidEndpointException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
