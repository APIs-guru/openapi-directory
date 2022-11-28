import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListVocabularyFiltersQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListVocabularyFiltersXAmzTargetEnum {
    TranscribeListVocabularyFilters = "Transcribe.ListVocabularyFilters"
}
export declare class ListVocabularyFiltersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListVocabularyFiltersXAmzTargetEnum;
}
export declare class ListVocabularyFiltersRequest extends SpeakeasyBase {
    queryParams: ListVocabularyFiltersQueryParams;
    headers: ListVocabularyFiltersHeaders;
    request: shared.ListVocabularyFiltersRequest;
}
export declare class ListVocabularyFiltersResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    listVocabularyFiltersResponse?: shared.ListVocabularyFiltersResponse;
    statusCode: number;
}
