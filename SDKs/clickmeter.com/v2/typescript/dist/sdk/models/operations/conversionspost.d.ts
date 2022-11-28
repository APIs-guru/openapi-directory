import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConversionsPostPathParams extends SpeakeasyBase {
    conversionId: number;
}
export declare class ConversionsPostRequests extends SpeakeasyBase {
    apiCoreDtoConversionsConversion?: shared.ApiCoreDtoConversionsConversion;
    apiCoreDtoConversionsConversion1?: shared.ApiCoreDtoConversionsConversion;
    apiCoreDtoConversionsConversion2?: shared.ApiCoreDtoConversionsConversion;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class ConversionsPostRequest extends SpeakeasyBase {
    pathParams: ConversionsPostPathParams;
    request: ConversionsPostRequests;
}
export declare class ConversionsPostResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
