import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SendbatchPostHeaders extends SpeakeasyBase {
    accept: string;
    contentType: string;
}
export declare class SendbatchPostRequest extends SpeakeasyBase {
    headers: SendbatchPostHeaders;
    request: shared.BulkSmsRequest;
}
export declare class SendbatchPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
