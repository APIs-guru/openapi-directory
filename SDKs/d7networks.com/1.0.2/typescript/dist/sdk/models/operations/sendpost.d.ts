import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SendPostHeaders extends SpeakeasyBase {
    accept: string;
    contentType: string;
}
export declare class SendPostRequest extends SpeakeasyBase {
    headers: SendPostHeaders;
    request: shared.SendSmsRequest;
}
export declare class SendPostResponse extends SpeakeasyBase {
    contentType: string;
    sendPost500ApplicationJsonAny?: any;
    statusCode: number;
}
