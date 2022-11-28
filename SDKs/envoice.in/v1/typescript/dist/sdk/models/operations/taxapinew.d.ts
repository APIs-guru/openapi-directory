import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TaxApiNewHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class TaxApiNewRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    taxCreateApiModel?: shared.TaxCreateApiModel;
    taxCreateApiModel1?: shared.TaxCreateApiModel;
    taxCreateApiModel2?: shared.TaxCreateApiModel;
    textHtml: Uint8Array;
    textXml: Uint8Array;
}
export declare class TaxApiNewRequest extends SpeakeasyBase {
    headers: TaxApiNewHeaders;
    request: TaxApiNewRequests;
}
export declare class TaxApiNewResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    taxApiNew200ApplicationJsonInt32Integer?: number;
    taxApiNew200TextJsonInt32Integer?: number;
}
