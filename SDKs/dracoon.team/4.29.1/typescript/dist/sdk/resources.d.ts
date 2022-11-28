import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Resources {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * requestSubscriptionScopes - Request list of subscription scopes
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
     *
     * ### Description:
     * Retrieve a list of subscription scopes.
     *
     * ### Precondition:
     * Authenticated user.
     *
     * ### Postcondition:
     * List of scopes is returned.
     *
     * ### Further Information:
     * None.
    **/
    requestSubscriptionScopes(config?: AxiosRequestConfig): Promise<operations.RequestSubscriptionScopesResponse>;
    /**
     * requestUserAvatar - Request user avatar
     *
     * ### Description:
     * Get user avatar.
     *
     * ### Precondition:
     * Valid user ID and avatar UUID
     *
     * ### Postcondition:
     * Avatar is returned.
     *
     * ### Further Information:
     * None.
    **/
    requestUserAvatar(req: operations.RequestUserAvatarRequest, config?: AxiosRequestConfig): Promise<operations.RequestUserAvatarResponse>;
}
