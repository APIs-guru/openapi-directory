import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsDeleteWebhookPathParams extends SpeakeasyBase {
    hookId: number;
    org: string;
}
export declare class OrgsDeleteWebhookRequest extends SpeakeasyBase {
    pathParams: OrgsDeleteWebhookPathParams;
}
export declare class OrgsDeleteWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
