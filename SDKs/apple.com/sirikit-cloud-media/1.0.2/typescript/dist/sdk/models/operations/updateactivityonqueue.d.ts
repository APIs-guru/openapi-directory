import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateActivityOnQueueHeaders extends SpeakeasyBase {
    acceptLanguage: string;
    userAgent: string;
    xApplecloudextensionRetryCount?: number;
    xApplecloudextensionSessionId: string;
}
export declare class UpdateActivityOnQueueRequest extends SpeakeasyBase {
    headers: UpdateActivityOnQueueHeaders;
    request?: shared.UpdateActivityRequest;
}
export declare class UpdateActivityOnQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateActivityResponse?: shared.UpdateActivityResponse;
}
