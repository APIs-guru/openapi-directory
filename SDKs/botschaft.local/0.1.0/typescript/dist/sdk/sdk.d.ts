import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://botschaft.local"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * configConfigGet - Config
    **/
    configConfigGet(req: operations.ConfigConfigGetRequest, config?: AxiosRequestConfig): Promise<operations.ConfigConfigGetResponse>;
    /**
     * discordGetDiscordGet - Discord Get
    **/
    discordGetDiscordGet(req: operations.DiscordGetDiscordGetRequest, config?: AxiosRequestConfig): Promise<operations.DiscordGetDiscordGetResponse>;
    /**
     * discordPostDiscordPost - Discord Post
    **/
    discordPostDiscordPost(req: operations.DiscordPostDiscordPostRequest, config?: AxiosRequestConfig): Promise<operations.DiscordPostDiscordPostResponse>;
    /**
     * slackGetSlackGet - Slack Get
    **/
    slackGetSlackGet(req: operations.SlackGetSlackGetRequest, config?: AxiosRequestConfig): Promise<operations.SlackGetSlackGetResponse>;
    /**
     * slackPostSlackPost - Slack Post
    **/
    slackPostSlackPost(req: operations.SlackPostSlackPostRequest, config?: AxiosRequestConfig): Promise<operations.SlackPostSlackPostResponse>;
    /**
     * snsGetSnsGet - Sns Get
    **/
    snsGetSnsGet(req: operations.SnsGetSnsGetRequest, config?: AxiosRequestConfig): Promise<operations.SnsGetSnsGetResponse>;
    /**
     * snsPostSnsPost - Sns Post
    **/
    snsPostSnsPost(req: operations.SnsPostSnsPostRequest, config?: AxiosRequestConfig): Promise<operations.SnsPostSnsPostResponse>;
    /**
     * topicTopicTopicNameGet - Topic
    **/
    topicTopicTopicNameGet(req: operations.TopicTopicTopicNameGetRequest, config?: AxiosRequestConfig): Promise<operations.TopicTopicTopicNameGetResponse>;
    /**
     * twilioMessageGetTwilioGet - Twilio Message Get
    **/
    twilioMessageGetTwilioGet(req: operations.TwilioMessageGetTwilioGetRequest, config?: AxiosRequestConfig): Promise<operations.TwilioMessageGetTwilioGetResponse>;
    /**
     * twilioMessagePostTwilioPost - Twilio Message Post
    **/
    twilioMessagePostTwilioPost(req: operations.TwilioMessagePostTwilioPostRequest, config?: AxiosRequestConfig): Promise<operations.TwilioMessagePostTwilioPostResponse>;
}
export {};
