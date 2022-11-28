import { SpeakeasyBase } from "../../../internal/utils";
export declare class EnterpriseAdminPingGlobalWebhookPathParams extends SpeakeasyBase {
    hookId: number;
}
export declare class EnterpriseAdminPingGlobalWebhookHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class EnterpriseAdminPingGlobalWebhookRequest extends SpeakeasyBase {
    pathParams: EnterpriseAdminPingGlobalWebhookPathParams;
    headers: EnterpriseAdminPingGlobalWebhookHeaders;
}
export declare class EnterpriseAdminPingGlobalWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
