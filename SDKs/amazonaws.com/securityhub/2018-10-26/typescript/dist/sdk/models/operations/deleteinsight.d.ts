import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteInsightPathParams extends SpeakeasyBase {
    insightArn: string;
}
export declare class DeleteInsightHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteInsightRequest extends SpeakeasyBase {
    pathParams: DeleteInsightPathParams;
    headers: DeleteInsightHeaders;
}
export declare class DeleteInsightResponse extends SpeakeasyBase {
    contentType: string;
    deleteInsightResponse?: shared.DeleteInsightResponse;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
