import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteIncomingWebhookPathParams extends SpeakeasyBase {
    webhookId: string;
}
export declare class DeleteIncomingWebhookSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class DeleteIncomingWebhookRequest extends SpeakeasyBase {
    pathParams: DeleteIncomingWebhookPathParams;
    security: DeleteIncomingWebhookSecurity;
}
export declare class DeleteIncomingWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
