import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListVocabulariesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListVocabulariesXAmzTargetEnum {
    TranscribeListVocabularies = "Transcribe.ListVocabularies"
}
export declare class ListVocabulariesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListVocabulariesXAmzTargetEnum;
}
export declare class ListVocabulariesRequest extends SpeakeasyBase {
    queryParams: ListVocabulariesQueryParams;
    headers: ListVocabulariesHeaders;
    request: shared.ListVocabulariesRequest;
}
export declare class ListVocabulariesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    listVocabulariesResponse?: shared.ListVocabulariesResponse;
    statusCode: number;
}
