import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConversionsPutRequests extends SpeakeasyBase {
    apiCoreDtoConversionsConversion?: shared.ApiCoreDtoConversionsConversion;
    apiCoreDtoConversionsConversion1?: shared.ApiCoreDtoConversionsConversion;
    apiCoreDtoConversionsConversion2?: shared.ApiCoreDtoConversionsConversion;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class ConversionsPutRequest extends SpeakeasyBase {
    request: ConversionsPutRequests;
}
export declare class ConversionsPutResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
