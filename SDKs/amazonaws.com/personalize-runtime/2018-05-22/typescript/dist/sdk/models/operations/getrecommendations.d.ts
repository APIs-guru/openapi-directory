import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetRecommendationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRecommendationsRequestBody extends SpeakeasyBase {
    campaignArn: string;
    context?: Map<string, string>;
    filterArn?: string;
    filterValues?: Map<string, string>;
    itemId?: string;
    numResults?: number;
    userId?: string;
}
export declare class GetRecommendationsRequest extends SpeakeasyBase {
    headers: GetRecommendationsHeaders;
    request: GetRecommendationsRequestBody;
}
export declare class GetRecommendationsResponse extends SpeakeasyBase {
    contentType: string;
    getRecommendationsResponse?: shared.GetRecommendationsResponse;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
