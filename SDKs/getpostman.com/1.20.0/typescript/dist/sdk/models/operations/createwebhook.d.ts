import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateWebhookQueryParams extends SpeakeasyBase {
    workspace?: string;
}
export declare class CreateWebhookRequestBodyWebhook extends SpeakeasyBase {
    collection?: string;
    name?: string;
}
export declare class CreateWebhookRequestBody extends SpeakeasyBase {
    webhook?: CreateWebhookRequestBodyWebhook;
}
export declare class CreateWebhookRequest extends SpeakeasyBase {
    queryParams: CreateWebhookQueryParams;
    request?: CreateWebhookRequestBody;
}
export declare class CreateWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
