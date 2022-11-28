import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrderApiAllQueryParams extends SpeakeasyBase {
    queryOptionsPage?: number;
    queryOptionsPageSize?: number;
}
export declare class OrderApiAllHeaders extends SpeakeasyBase {
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class OrderApiAllRequest extends SpeakeasyBase {
    queryParams: OrderApiAllQueryParams;
    headers: OrderApiAllHeaders;
}
export declare class OrderApiAllResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    listResultOrderDetailsApiModel?: shared.ListResultOrderDetailsApiModel;
    statusCode: number;
}
