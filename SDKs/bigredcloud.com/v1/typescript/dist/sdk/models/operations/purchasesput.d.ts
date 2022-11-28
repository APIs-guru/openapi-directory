import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PurchasesPutPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PurchasesPutRequest extends SpeakeasyBase {
    pathParams: PurchasesPutPathParams;
    request: shared.PurchaseDto;
}
export declare class PurchasesPutResponse extends SpeakeasyBase {
    contentType: string;
    purchasesPut200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
