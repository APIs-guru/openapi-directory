import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://sms-voice.pinpoint.{region}.amazonaws.com", "https://sms-voice.pinpoint.{region}.amazonaws.com", "http://sms-voice.pinpoint.{region}.amazonaws.com.cn", "https://sms-voice.pinpoint.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * createConfigurationSet - Create a new configuration set. After you create the configuration set, you can add one or more event destinations to it.
    **/
    createConfigurationSet(req: operations.CreateConfigurationSetRequest, config?: AxiosRequestConfig): Promise<operations.CreateConfigurationSetResponse>;
    /**
     * createConfigurationSetEventDestination - Create a new event destination in a configuration set.
    **/
    createConfigurationSetEventDestination(req: operations.CreateConfigurationSetEventDestinationRequest, config?: AxiosRequestConfig): Promise<operations.CreateConfigurationSetEventDestinationResponse>;
    /**
     * deleteConfigurationSet - Deletes an existing configuration set.
    **/
    deleteConfigurationSet(req: operations.DeleteConfigurationSetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConfigurationSetResponse>;
    /**
     * deleteConfigurationSetEventDestination - Deletes an event destination in a configuration set.
    **/
    deleteConfigurationSetEventDestination(req: operations.DeleteConfigurationSetEventDestinationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConfigurationSetEventDestinationResponse>;
    /**
     * getConfigurationSetEventDestinations - Obtain information about an event destination, including the types of events it reports, the Amazon Resource Name (ARN) of the destination, and the name of the event destination.
    **/
    getConfigurationSetEventDestinations(req: operations.GetConfigurationSetEventDestinationsRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigurationSetEventDestinationsResponse>;
    /**
     * listConfigurationSets - List all of the configuration sets associated with your Amazon Pinpoint account in the current region.
    **/
    listConfigurationSets(req: operations.ListConfigurationSetsRequest, config?: AxiosRequestConfig): Promise<operations.ListConfigurationSetsResponse>;
    /**
     * sendVoiceMessage - Create a new voice message and send it to a recipient's phone number.
    **/
    sendVoiceMessage(req: operations.SendVoiceMessageRequest, config?: AxiosRequestConfig): Promise<operations.SendVoiceMessageResponse>;
    /**
     * updateConfigurationSetEventDestination - Update an event destination in a configuration set. An event destination is a location that you publish information about your voice calls to. For example, you can log an event to an Amazon CloudWatch destination when a call fails.
    **/
    updateConfigurationSetEventDestination(req: operations.UpdateConfigurationSetEventDestinationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConfigurationSetEventDestinationResponse>;
}
export {};
