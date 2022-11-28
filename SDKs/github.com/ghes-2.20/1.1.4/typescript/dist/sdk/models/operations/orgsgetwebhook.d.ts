import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsGetWebhookPathParams extends SpeakeasyBase {
    hookId: number;
    org: string;
}
export declare class OrgsGetWebhookRequest extends SpeakeasyBase {
    pathParams: OrgsGetWebhookPathParams;
}
export declare class OrgsGetWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    orgHook?: shared.OrgHook;
}
