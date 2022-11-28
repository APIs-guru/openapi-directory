import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateIncomingWebhookPathParams extends SpeakeasyBase {
    conversationId: string;
}
export declare class CreateIncomingWebhookQueryParams extends SpeakeasyBase {
    description?: string;
    name?: string;
    userId?: string;
}
export declare class CreateIncomingWebhookSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class CreateIncomingWebhookRequest extends SpeakeasyBase {
    pathParams: CreateIncomingWebhookPathParams;
    queryParams: CreateIncomingWebhookQueryParams;
    security: CreateIncomingWebhookSecurity;
}
export declare class CreateIncomingWebhookResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    incomingWebhook?: any;
    statusCode: number;
}
