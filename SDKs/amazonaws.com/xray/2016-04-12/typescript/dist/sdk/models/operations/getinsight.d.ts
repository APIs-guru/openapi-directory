import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetInsightHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetInsightRequestBody extends SpeakeasyBase {
    insightId: string;
}
export declare class GetInsightRequest extends SpeakeasyBase {
    headers: GetInsightHeaders;
    request: GetInsightRequestBody;
}
export declare class GetInsightResponse extends SpeakeasyBase {
    contentType: string;
    getInsightResult?: shared.GetInsightResult;
    invalidRequestException?: any;
    statusCode: number;
    throttledException?: any;
}
