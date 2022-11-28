import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TaxApiAllHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class TaxApiAllRequest extends SpeakeasyBase {
    headers: TaxApiAllHeaders;
}
export declare class TaxApiAllResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    taxDetailsApiModels?: shared.TaxDetailsApiModel[];
}
