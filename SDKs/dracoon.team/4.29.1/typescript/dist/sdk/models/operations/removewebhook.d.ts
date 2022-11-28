import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveWebhookPathParams extends SpeakeasyBase {
    webhookId: number;
}
export declare class RemoveWebhookHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RemoveWebhookRequest extends SpeakeasyBase {
    pathParams: RemoveWebhookPathParams;
    headers: RemoveWebhookHeaders;
}
export declare class RemoveWebhookResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
