import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostV1VerificationSendFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class PostV1VerificationSendQueryParams extends SpeakeasyBase {
    countryCode?: string;
    format?: PostV1VerificationSendFormatEnum;
    key: string;
    mesg?: string;
    tel: string;
}
export declare class PostV1VerificationSendRequest extends SpeakeasyBase {
    queryParams: PostV1VerificationSendQueryParams;
}
export declare class PostV1VerificationSendResponse extends SpeakeasyBase {
    contentType: string;
    postV1VerificationSend200ApplicationJsonString?: string;
    statusCode: number;
}
