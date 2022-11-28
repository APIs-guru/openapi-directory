import { SpeakeasyBase } from "../../../internal/utils";
export declare class PurchasesDeletePathParams extends SpeakeasyBase {
    id: number;
}
export declare class PurchasesDeleteQueryParams extends SpeakeasyBase {
    timestamp: string;
}
export declare class PurchasesDeleteRequest extends SpeakeasyBase {
    pathParams: PurchasesDeletePathParams;
    queryParams: PurchasesDeleteQueryParams;
}
export declare class PurchasesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    purchasesDelete200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
