import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TaxApiDeleteHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class TaxApiDeleteRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    taxDeleteApiModel?: shared.TaxDeleteApiModel;
    taxDeleteApiModel1?: shared.TaxDeleteApiModel;
    taxDeleteApiModel2?: shared.TaxDeleteApiModel;
    textHtml: Uint8Array;
    textXml: Uint8Array;
}
export declare class TaxApiDeleteRequest extends SpeakeasyBase {
    headers: TaxApiDeleteHeaders;
    request: TaxApiDeleteRequests;
}
export declare class TaxApiDeleteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    taxApiDelete200ApplicationJsonInt32Integer?: number;
    taxApiDelete200TextJsonInt32Integer?: number;
}
