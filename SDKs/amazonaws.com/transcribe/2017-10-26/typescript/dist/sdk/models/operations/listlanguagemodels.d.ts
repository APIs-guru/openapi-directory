import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListLanguageModelsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListLanguageModelsXAmzTargetEnum {
    TranscribeListLanguageModels = "Transcribe.ListLanguageModels"
}
export declare class ListLanguageModelsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListLanguageModelsXAmzTargetEnum;
}
export declare class ListLanguageModelsRequest extends SpeakeasyBase {
    queryParams: ListLanguageModelsQueryParams;
    headers: ListLanguageModelsHeaders;
    request: shared.ListLanguageModelsRequest;
}
export declare class ListLanguageModelsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    listLanguageModelsResponse?: shared.ListLanguageModelsResponse;
    statusCode: number;
}
