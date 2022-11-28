import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PlayMediaIntentHandlingHeaders extends SpeakeasyBase {
    acceptLanguage: string;
    requestTimeout: number;
    userAgent: string;
    xApplecloudextensionRetryCount?: number;
    xApplecloudextensionSessionId: string;
}
export declare class PlayMediaIntentHandlingRequest extends SpeakeasyBase {
    headers: PlayMediaIntentHandlingHeaders;
    request?: shared.PlayMediaIntentHandlingInvocation[];
}
export declare class PlayMediaIntentHandlingResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    playMediaIntentHandlingInvocationResponses?: any[];
    statusCode: number;
}
