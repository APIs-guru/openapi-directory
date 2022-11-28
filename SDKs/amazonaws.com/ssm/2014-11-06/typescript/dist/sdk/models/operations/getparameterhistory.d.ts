import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetParameterHistoryQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetParameterHistoryXAmzTargetEnum {
    AmazonSsmGetParameterHistory = "AmazonSSM.GetParameterHistory"
}
export declare class GetParameterHistoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetParameterHistoryXAmzTargetEnum;
}
export declare class GetParameterHistoryRequest extends SpeakeasyBase {
    queryParams: GetParameterHistoryQueryParams;
    headers: GetParameterHistoryHeaders;
    request: shared.GetParameterHistoryRequest;
}
export declare class GetParameterHistoryResponse extends SpeakeasyBase {
    contentType: string;
    getParameterHistoryResult?: shared.GetParameterHistoryResult;
    internalServerError?: any;
    invalidKeyId?: any;
    invalidNextToken?: any;
    parameterNotFound?: any;
    statusCode: number;
}
