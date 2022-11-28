import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProductApiAllQueryParams extends SpeakeasyBase {
    queryOptionsPage?: number;
    queryOptionsPageSize?: number;
}
export declare class ProductApiAllHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class ProductApiAllRequest extends SpeakeasyBase {
    queryParams: ProductApiAllQueryParams;
    headers: ProductApiAllHeaders;
}
export declare class ProductApiAllResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    listResultProductDetailsApiModel?: shared.ListResultProductDetailsApiModel;
    statusCode: number;
}
