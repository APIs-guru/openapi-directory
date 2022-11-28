import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutLexiconPathParams extends SpeakeasyBase {
    lexiconName: string;
}
export declare class PutLexiconHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutLexiconRequestBody extends SpeakeasyBase {
    content: string;
}
export declare class PutLexiconRequest extends SpeakeasyBase {
    pathParams: PutLexiconPathParams;
    headers: PutLexiconHeaders;
    request: PutLexiconRequestBody;
}
export declare class PutLexiconResponse extends SpeakeasyBase {
    contentType: string;
    invalidLexiconException?: any;
    lexiconSizeExceededException?: any;
    maxLexemeLengthExceededException?: any;
    maxLexiconsNumberExceededException?: any;
    putLexiconOutput?: Map<string, any>;
    serviceFailureException?: any;
    statusCode: number;
    unsupportedPlsAlphabetException?: any;
    unsupportedPlsLanguageException?: any;
}
