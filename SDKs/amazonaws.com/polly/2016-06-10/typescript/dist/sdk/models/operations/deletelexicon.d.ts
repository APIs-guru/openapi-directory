import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteLexiconPathParams extends SpeakeasyBase {
    lexiconName: string;
}
export declare class DeleteLexiconHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteLexiconRequest extends SpeakeasyBase {
    pathParams: DeleteLexiconPathParams;
    headers: DeleteLexiconHeaders;
}
export declare class DeleteLexiconResponse extends SpeakeasyBase {
    contentType: string;
    deleteLexiconOutput?: Map<string, any>;
    lexiconNotFoundException?: any;
    serviceFailureException?: any;
    statusCode: number;
}
