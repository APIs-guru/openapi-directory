import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    ConfigConfigGet(req: operations.ConfigConfigGetRequest, config?: AxiosRequestConfig): Promise<operations.ConfigConfigGetResponse>;
    DiscordGetDiscordGet(req: operations.DiscordGetDiscordGetRequest, config?: AxiosRequestConfig): Promise<operations.DiscordGetDiscordGetResponse>;
    DiscordPostDiscordPost(req: operations.DiscordPostDiscordPostRequest, config?: AxiosRequestConfig): Promise<operations.DiscordPostDiscordPostResponse>;
    SlackGetSlackGet(req: operations.SlackGetSlackGetRequest, config?: AxiosRequestConfig): Promise<operations.SlackGetSlackGetResponse>;
    SlackPostSlackPost(req: operations.SlackPostSlackPostRequest, config?: AxiosRequestConfig): Promise<operations.SlackPostSlackPostResponse>;
    SnsGetSnsGet(req: operations.SnsGetSnsGetRequest, config?: AxiosRequestConfig): Promise<operations.SnsGetSnsGetResponse>;
    SnsPostSnsPost(req: operations.SnsPostSnsPostRequest, config?: AxiosRequestConfig): Promise<operations.SnsPostSnsPostResponse>;
    TopicTopicTopicNameGet(req: operations.TopicTopicTopicNameGetRequest, config?: AxiosRequestConfig): Promise<operations.TopicTopicTopicNameGetResponse>;
    TwilioMessageGetTwilioGet(req: operations.TwilioMessageGetTwilioGetRequest, config?: AxiosRequestConfig): Promise<operations.TwilioMessageGetTwilioGetResponse>;
    TwilioMessagePostTwilioPost(req: operations.TwilioMessagePostTwilioPostRequest, config?: AxiosRequestConfig): Promise<operations.TwilioMessagePostTwilioPostResponse>;
}
export {};
