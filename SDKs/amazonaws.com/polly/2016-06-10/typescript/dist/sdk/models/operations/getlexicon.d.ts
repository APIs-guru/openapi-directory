import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLexiconPathParams extends SpeakeasyBase {
    lexiconName: string;
}
export declare class GetLexiconHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetLexiconRequest extends SpeakeasyBase {
    pathParams: GetLexiconPathParams;
    headers: GetLexiconHeaders;
}
export declare class GetLexiconResponse extends SpeakeasyBase {
    contentType: string;
    getLexiconOutput?: shared.GetLexiconOutput;
    lexiconNotFoundException?: any;
    serviceFailureException?: any;
    statusCode: number;
}
