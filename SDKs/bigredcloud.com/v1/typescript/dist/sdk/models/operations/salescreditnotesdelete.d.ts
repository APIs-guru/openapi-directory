import { SpeakeasyBase } from "../../../internal/utils";
export declare class SalesCreditNotesDeletePathParams extends SpeakeasyBase {
    id: number;
}
export declare class SalesCreditNotesDeleteQueryParams extends SpeakeasyBase {
    timestamp: string;
}
export declare class SalesCreditNotesDeleteRequest extends SpeakeasyBase {
    pathParams: SalesCreditNotesDeletePathParams;
    queryParams: SalesCreditNotesDeleteQueryParams;
}
export declare class SalesCreditNotesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    salesCreditNotesDelete200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
