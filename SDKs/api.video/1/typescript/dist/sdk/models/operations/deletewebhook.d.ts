import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteWebhookPathParams extends SpeakeasyBase {
    webhookId: string;
}
export declare class DeleteWebhookSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class DeleteWebhookRequest extends SpeakeasyBase {
    pathParams: DeleteWebhookPathParams;
    security: DeleteWebhookSecurity;
}
export declare class DeleteWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    notFound?: shared.NotFound;
}
