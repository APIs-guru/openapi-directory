import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TaxApiUpdateHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class TaxApiUpdateRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    taxUpdateApiModel?: shared.TaxUpdateApiModel;
    taxUpdateApiModel1?: shared.TaxUpdateApiModel;
    taxUpdateApiModel2?: shared.TaxUpdateApiModel;
    textHtml: Uint8Array;
    textXml: Uint8Array;
}
export declare class TaxApiUpdateRequest extends SpeakeasyBase {
    headers: TaxApiUpdateHeaders;
    request: TaxApiUpdateRequests;
}
export declare class TaxApiUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
