import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PurchasesPostRequest extends SpeakeasyBase {
    request: shared.PurchaseDto;
}
export declare class PurchasesPostResponse extends SpeakeasyBase {
    contentType: string;
    purchasesPost200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
