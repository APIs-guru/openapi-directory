import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SearchPlaceIndexForTextPathParams extends SpeakeasyBase {
    indexName: string;
}
export declare class SearchPlaceIndexForTextHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SearchPlaceIndexForTextRequestBody extends SpeakeasyBase {
    biasPosition?: number[];
    filterBBox?: number[];
    filterCountries?: string[];
    maxResults?: number;
    text: string;
}
export declare class SearchPlaceIndexForTextRequest extends SpeakeasyBase {
    pathParams: SearchPlaceIndexForTextPathParams;
    headers: SearchPlaceIndexForTextHeaders;
    request: SearchPlaceIndexForTextRequestBody;
}
export declare class SearchPlaceIndexForTextResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    searchPlaceIndexForTextResponse?: shared.SearchPlaceIndexForTextResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
