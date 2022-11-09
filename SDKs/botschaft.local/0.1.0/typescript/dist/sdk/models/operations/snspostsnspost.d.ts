import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SnsPostSnsPostHeaders extends SpeakeasyBase {
    authorization?: string;
}
export declare class SnsPostSnsPostRequest extends SpeakeasyBase {
    headers: SnsPostSnsPostHeaders;
    request: shared.SnsMessageRequest;
}
export declare class SnsPostSnsPostResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
    snsPostSnsPost200ApplicationJsonAny?: any;
}
