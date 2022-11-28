import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListMedicalVocabulariesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListMedicalVocabulariesXAmzTargetEnum {
    TranscribeListMedicalVocabularies = "Transcribe.ListMedicalVocabularies"
}
export declare class ListMedicalVocabulariesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListMedicalVocabulariesXAmzTargetEnum;
}
export declare class ListMedicalVocabulariesRequest extends SpeakeasyBase {
    queryParams: ListMedicalVocabulariesQueryParams;
    headers: ListMedicalVocabulariesHeaders;
    request: shared.ListMedicalVocabulariesRequest;
}
export declare class ListMedicalVocabulariesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    listMedicalVocabulariesResponse?: shared.ListMedicalVocabulariesResponse;
    statusCode: number;
}
