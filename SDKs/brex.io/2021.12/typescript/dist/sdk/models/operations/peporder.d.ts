import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PepOrderTypeEnum {
    Unknown = "",
    B = "B",
    P = "P"
}
export declare class PepOrderPathParams extends SpeakeasyBase {
    search: string;
    type: PepOrderTypeEnum;
}
export declare class PepOrderRequestBody extends SpeakeasyBase {
    aliases?: string;
    country?: string;
    dob?: string;
    familyName?: string;
    filters?: string;
    givenName?: string;
    lei?: string;
    locale?: string;
    medialists?: string;
    middleName?: string;
    monitoring?: boolean;
    peplists?: string;
    region?: string;
    smartMatch?: boolean;
    watchlists?: string;
    webhook?: string;
}
export declare class PepOrderSecurity extends SpeakeasyBase {
    userKey: shared.SchemeUserKey;
}
export declare class PepOrderRequest extends SpeakeasyBase {
    pathParams: PepOrderPathParams;
    request?: PepOrderRequestBody;
    security: PepOrderSecurity;
}
export declare class PepOrderResponse extends SpeakeasyBase {
    contentType: string;
    pepOrder200ApplicationJsonAny?: any;
    pepOrderDefaultApplicationJsonAny?: any;
    statusCode: number;
}
