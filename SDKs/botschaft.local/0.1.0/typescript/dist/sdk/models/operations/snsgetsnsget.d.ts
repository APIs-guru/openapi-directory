import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SnsGetSnsGetQueryParams extends SpeakeasyBase {
    base64Message?: string;
    message?: string;
}
export declare class SnsGetSnsGetHeaders extends SpeakeasyBase {
    authorization?: string;
}
export declare class SnsGetSnsGetRequest extends SpeakeasyBase {
    queryParams: SnsGetSnsGetQueryParams;
    headers: SnsGetSnsGetHeaders;
}
export declare class SnsGetSnsGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
    snsGetSnsGet200ApplicationJsonAny?: any;
}
