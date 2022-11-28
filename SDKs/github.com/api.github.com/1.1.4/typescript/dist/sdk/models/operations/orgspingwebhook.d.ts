import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsPingWebhookPathParams extends SpeakeasyBase {
    hookId: number;
    org: string;
}
export declare class OrgsPingWebhookRequest extends SpeakeasyBase {
    pathParams: OrgsPingWebhookPathParams;
}
export declare class OrgsPingWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
