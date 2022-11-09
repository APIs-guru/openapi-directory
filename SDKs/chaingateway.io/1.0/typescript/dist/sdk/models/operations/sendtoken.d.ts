import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SendTokenHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class SendTokenRequest extends SpeakeasyBase {
    headers: SendTokenHeaders;
    request: shared.SendTokenRequest;
}
export declare class SendTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    sendToken?: shared.SendToken;
}
