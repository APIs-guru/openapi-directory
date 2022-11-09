import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    CreateConfigurationSet(req: operations.CreateConfigurationSetRequest, config?: AxiosRequestConfig): Promise<operations.CreateConfigurationSetResponse>;
    CreateConfigurationSetEventDestination(req: operations.CreateConfigurationSetEventDestinationRequest, config?: AxiosRequestConfig): Promise<operations.CreateConfigurationSetEventDestinationResponse>;
    DeleteConfigurationSet(req: operations.DeleteConfigurationSetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConfigurationSetResponse>;
    DeleteConfigurationSetEventDestination(req: operations.DeleteConfigurationSetEventDestinationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConfigurationSetEventDestinationResponse>;
    GetConfigurationSetEventDestinations(req: operations.GetConfigurationSetEventDestinationsRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigurationSetEventDestinationsResponse>;
    ListConfigurationSets(req: operations.ListConfigurationSetsRequest, config?: AxiosRequestConfig): Promise<operations.ListConfigurationSetsResponse>;
    SendVoiceMessage(req: operations.SendVoiceMessageRequest, config?: AxiosRequestConfig): Promise<operations.SendVoiceMessageResponse>;
    UpdateConfigurationSetEventDestination(req: operations.UpdateConfigurationSetEventDestinationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConfigurationSetEventDestinationResponse>;
}
export {};
