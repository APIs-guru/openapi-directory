import { SpeakeasyBase } from "../../../internal/utils";
export declare class WhoisPathParams extends SpeakeasyBase {
    domain: string;
}
export declare enum WhoisFormatEnum {
    Raw = "raw",
    Formatted = "formatted",
    Json = "json"
}
export declare class WhoisQueryParams extends SpeakeasyBase {
    format?: WhoisFormatEnum;
}
export declare class WhoisRequest extends SpeakeasyBase {
    pathParams: WhoisPathParams;
    queryParams: WhoisQueryParams;
}
export declare class WhoisResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
