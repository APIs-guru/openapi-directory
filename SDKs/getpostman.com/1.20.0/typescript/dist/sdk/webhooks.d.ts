import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Webhooks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createWebhook - Create Webhook
     *
     * Create a webhook that triggers a collection with your custom payload.
     *
     * You can specify the webhook name and the collection to trigger by using the following attributes of the `webhook` object on your JSON body:
     *
     * * `name`: the name of the webhook that you're creating.
     * * `collection`: the ID of the collection that you want to trigger once this webhook is called.
     *
     * Once created, the webhook URL can be retrieved by accessing the `webhookUrl` attribute of the `webhook` object on the response JSON payload.
    **/
    createWebhook(req: operations.CreateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.CreateWebhookResponse>;
}
