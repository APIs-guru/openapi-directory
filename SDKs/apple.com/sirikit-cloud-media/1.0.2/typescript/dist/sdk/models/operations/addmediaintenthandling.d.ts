import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddMediaIntentHandlingHeaders extends SpeakeasyBase {
    acceptLanguage: string;
    requestTimeout: number;
    userAgent: string;
    xApplecloudextensionRetryCount?: number;
    xApplecloudextensionSessionId: string;
}
export declare class AddMediaIntentHandlingRequest extends SpeakeasyBase {
    headers: AddMediaIntentHandlingHeaders;
    request?: shared.AddMediaIntentHandlingInvocation[];
}
export declare class AddMediaIntentHandlingResponse extends SpeakeasyBase {
    addMediaIntentHandlingInvocationResponses?: any[];
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
