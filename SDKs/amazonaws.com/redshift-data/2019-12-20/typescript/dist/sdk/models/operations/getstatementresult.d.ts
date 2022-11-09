import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetStatementResultQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum GetStatementResultXAmzTargetEnum {
    RedshiftDataGetStatementResult = "RedshiftData.GetStatementResult"
}
export declare class GetStatementResultHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetStatementResultXAmzTargetEnum;
}
export declare class GetStatementResultRequest extends SpeakeasyBase {
    queryParams: GetStatementResultQueryParams;
    headers: GetStatementResultHeaders;
    request: shared.GetStatementResultRequest;
}
export declare class GetStatementResultResponse extends SpeakeasyBase {
    contentType: string;
    getStatementResultResponse?: shared.GetStatementResultResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
