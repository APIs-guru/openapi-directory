import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostV1OrderScreenFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class PostV1OrderScreenQueryParams extends SpeakeasyBase {
    amount?: number;
    avsResult?: string;
    billAddr?: string;
    billCity?: string;
    billCountry?: string;
    billState?: string;
    billZipCode?: string;
    binNo?: string;
    cardHash?: string;
    currency?: string;
    cvvResult?: string;
    department?: string;
    email?: string;
    emailDomain?: string;
    emailHash?: string;
    firstName?: string;
    flpChecksum?: string;
    format?: PostV1OrderScreenFormatEnum;
    ip: string;
    key: string;
    lastName?: string;
    passwordHash?: string;
    paymentMode?: string;
    quantity?: number;
    shipAddr?: string;
    shipCity?: string;
    shipCountry?: string;
    shipState?: string;
    shipZipCode?: string;
    userOrderId?: string;
    userOrderMemo?: string;
    userPhone?: string;
    usernameHash?: string;
}
export declare class PostV1OrderScreenRequest extends SpeakeasyBase {
    queryParams: PostV1OrderScreenQueryParams;
}
export declare class PostV1OrderScreenResponse extends SpeakeasyBase {
    contentType: string;
    postV1OrderScreen200ApplicationJsonString?: string;
    statusCode: number;
}
