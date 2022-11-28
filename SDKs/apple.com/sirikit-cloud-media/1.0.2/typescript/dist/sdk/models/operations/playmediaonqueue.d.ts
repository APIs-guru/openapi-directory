import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PlayMediaOnQueueHeaders extends SpeakeasyBase {
    acceptLanguage: string;
    userAgent: string;
    xApplecloudextensionRetryCount?: number;
    xApplecloudextensionSessionId: string;
}
export declare class PlayMediaOnQueueRequest extends SpeakeasyBase {
    headers: PlayMediaOnQueueHeaders;
    request?: shared.PlayMediaRequest;
}
export declare class PlayMediaOnQueueResponse extends SpeakeasyBase {
    contentType: string;
    queue?: shared.Queue;
    statusCode: number;
}
