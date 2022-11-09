import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPersonalizedRankingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetPersonalizedRankingRequestBody extends SpeakeasyBase {
    campaignArn: string;
    context?: Map<string, string>;
    filterArn?: string;
    filterValues?: Map<string, string>;
    inputList: string[];
    userId: string;
}
export declare class GetPersonalizedRankingRequest extends SpeakeasyBase {
    headers: GetPersonalizedRankingHeaders;
    request: GetPersonalizedRankingRequestBody;
}
export declare class GetPersonalizedRankingResponse extends SpeakeasyBase {
    contentType: string;
    getPersonalizedRankingResponse?: shared.GetPersonalizedRankingResponse;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
