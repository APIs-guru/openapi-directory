import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class User {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * changeUserPassword - Change user's password
     *
     * ### Description:
     * Change the user's password.
     *
     * ### Precondition:
     * Authenticated user.
     *
     * ### Postcondition:
     * User's password is changed.
     *
     * ### Further Information:
     * The password **MUST** comply to configured password policies.
     *
     * Forbidden characters in passwords: [`&`, `'`, `<`, `>`]
    **/
    changeUserPassword(req: operations.ChangeUserPasswordRequest, config?: AxiosRequestConfig): Promise<operations.ChangeUserPasswordResponse>;
    /**
     * createAndPreserveUserKeyPair - Create key pair and preserve copy of old private key
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
     *
     * ### Description:
     * Create user key pair and preserve copy of old private key.
     *
     * ### Precondition:
     * Authenticated user.
     *
     * ### Postcondition:
     * Key pair is created.
     * Copy of old private key is preserved.
     *
     * ### Further Information:
     * You can submit your old private key, encrypted with your current password.
     * This allows migrating file keys encrypted with your old key pair to the new one.
    **/
    createAndPreserveUserKeyPair(req: operations.CreateAndPreserveUserKeyPairRequest, config?: AxiosRequestConfig): Promise<operations.CreateAndPreserveUserKeyPairResponse>;
    /**
     * enableCustomerEncryption - Activate client-side encryption for customer
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.24.0</h3>
     *
     * ### Use `POST /settings/keypair` API
     *
     * ### Description:
     * Activate client-side encryption for according customer.
     *
     * ### Precondition:
     * Right <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; change config</span> required.
     *
     * ### Postcondition:
     * Client-side encryption is enabled.
     *
     * ### Further Information:
     * Sets the ability for this customer to encrypt rooms.
     * Once enabled on customer level, it **CANNOT** be unset.
     * On activation, a customer rescue key pair **MUST** be set.
    **/
    enableCustomerEncryption(req: operations.EnableCustomerEncryptionRequest, config?: AxiosRequestConfig): Promise<operations.EnableCustomerEncryptionResponse>;
    /**
     * listDownloadShareSubscriptions - List Download Share subscriptions
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
     *
     * ### Description:
     * Retrieve a list of subscribed Download Shares for current user.
     *
     * ### Precondition:
     * Authenticated user.
     *
     * ### Postcondition:
     * List of subscribed Download Shares is returned.
     *
     * ### Further Information:
     * None.
     *
     * ### Filtering
     * All filter fields are connected via logical conjunction (**AND**)
     * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `authParentId:eq:#`
     * Get download shares where `authParentId` equals `#`.
     *
     * </details>
     *
     * ### Filtering options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
     * | :--- | :--- | :--- | :--- | :--- |
     * | **`downloadShareId`** | Download Share ID filter | `eq` | Download Share ID equals value. | `long value` |
     * | **`authParentId`** | Auth parent ID filter | `eq` | Auth parent ID equals value. | `long value` |
     *
     * </details>
     *
     * ---
     *
     * ### Sorting:
     * Sort string syntax: `FIELD_NAME:ORDER`
     * `ORDER` can be `asc` or `desc`.
     * Multiple sort criteria are possible.
     * Fields are connected via logical conjunction **AND**.
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `downloadShareId:desc|authParentId:asc`
     * Sort by `downloadShareId` descending **AND** `authParentId` ascending.
     *
     * </details>
     *
     * ### Sorting options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Description |
     * | :--- | :--- |
     * | **`downloadShareId`** | Download Share ID |
     * | **`authParentId`** | Auth parent ID |
     *
     * </details>
    **/
    listDownloadShareSubscriptions(req: operations.ListDownloadShareSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.ListDownloadShareSubscriptionsResponse>;
    /**
     * listNodeSubscriptions - List node subscriptions
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
     *
     * ### Description:
     * Retrieve a list of subscribed nodes for current user.
     *
     * ### Precondition:
     * Authenticated user.
     *
     * ### Postcondition:
     * List of subscribed nodes is returned.
     *
     * ### Further Information:
     * None.
     *
     * ### Filtering:
     * All filter fields are connected via logical conjunction (**AND**)
     * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `authParentId:eq:#`
     * Get nodes where `authParentId` equals `#`.
     *
     * </details>
     *
     * ### Filtering options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
     * | :--- | :--- | :--- | :--- | :--- |
     * | **`nodeId`** | Node ID filter | `eq` | Node ID equals value. | `long value` |
     * | **`authParentId`** | Auth parent ID filter | `eq` | Auth parent ID equals value. | `long value` |
     *
     * </details>
     *
     * ---
     *
     * ### Sorting:
     * Sort string syntax: `FIELD_NAME:ORDER`
     * `ORDER` can be `asc` or `desc`.
     * Multiple sort criteria are possible.
     * Fields are connected via logical conjunction **AND**.
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `nodeId:desc|authParentId:asc`
     * Sort by `nodeId` descending **AND** `authParentId` ascending.
     *
     * </details>
     *
     * ### Sorting options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Description |
     * | :--- | :--- |
     * | **`nodeId`** | Node ID |
     * | **`authParentId`** | Auth parent ID |
     *
     * </details>
    **/
    listNodeSubscriptions(req: operations.ListNodeSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.ListNodeSubscriptionsResponse>;
    /**
     * listUploadShareSubscriptions - List Upload Share subscriptions
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
     *
     * ### Description:
     * Retrieve a list of subscribed Upload Shares for current user.
     *
     * ### Precondition:
     * Authenticated user.
     *
     * ### Postcondition:
     * List of subscribed Upload Shares is returned.
     *
     * ### Further Information:
     * None.
     *
     * ### Filtering
     * All filter fields are connected via logical conjunction (**AND**)
     * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `targetNodeId:eq:#`
     * Get upload shares where `targetNodeId` equals `#`.
     *
     * </details>
     *
     * ### Filtering options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
     * | :--- | :--- | :--- | :--- | :--- |
     * | **`uploadShareId`** | Upload Share ID filter | `eq` | Upload Share ID equals value. | `long value` |
     * | **`targetNodeId`** | Target node ID filter | `eq` | Target node ID equals value. | `long value` |
     *
     * </details>
     *
     * ---
     *
     * ### Sorting:
     * Sort string syntax: `FIELD_NAME:ORDER`
     * `ORDER` can be `asc` or `desc`.
     * Multiple sort criteria are possible.
     * Fields are connected via logical conjunction **AND**.
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `uploadShareId:desc|targetNodeId:asc`
     * Sort by `uploadShareId` descending **AND** `targetNodeId` ascending.
     *
     * </details>
     *
     * ### Sorting options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Description |
     * | :--- | :--- |
     * | **`uploadShareId`** | Upload Share ID |
     * | **`targetNodeId`** | Target node ID |
     *
     * </details>
    **/
    listUploadShareSubscriptions(req: operations.ListUploadShareSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.ListUploadShareSubscriptionsResponse>;
    /**
     * logout - Invalidate authentication token
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.12.0</h3>
     *
     * ### Description:
     * Log out a user.
     *
     * ### Precondition:
     * Authenticated user.
     *
     * ### Postcondition:
     * * User is logged out
     * * Authentication token gets invalidated.
     *
     * ### Further Information:
     * None.
    **/
    logout(req: operations.LogoutRequest, config?: AxiosRequestConfig): Promise<operations.LogoutResponse>;
    /**
     * pingUser - (authenticated) Ping
     *
     * ### Description:
     * Test connection to DRACOON Server (while authenticated).
     *
     * ### Precondition:
     * Authenticated user.
     *
     * ### Postcondition:
     * `200 OK` with principal information is returned if successful.
     *
     * ### Further Information:
     * None.
    **/
    pingUser(req: operations.PingUserRequest, config?: AxiosRequestConfig): Promise<operations.PingUserResponse>;
    /**
     * removeOAuthApproval - Remove OAuth client approval
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.22.0</h3>
     *
     * ### Functional Description:
     * Delete an OAuth client approval.
     *
     * ### Precondition:
     * Authenticated user and valid client ID
     *
     * ### Postcondition:
     * OAuth Client approval is revoked.
     *
     * ### Further Information:
     * None.
    **/
    removeOAuthApproval(req: operations.RemoveOAuthApprovalRequest, config?: AxiosRequestConfig): Promise<operations.RemoveOAuthApprovalResponse>;
    /**
     * removeOAuthAuthorization - Remove a OAuth authorization
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.12.0</h3>
     *
     * ### Description:
     * Delete an authorization.
     *
     * ### Precondition:
     * Authenticated user and valid client ID, authorization ID
     *
     * ### Postcondition:
     * Authorization is revoked.
     *
     * ### Further Information:
     * None.
    **/
    removeOAuthAuthorization(req: operations.RemoveOAuthAuthorizationRequest, config?: AxiosRequestConfig): Promise<operations.RemoveOAuthAuthorizationResponse>;
    /**
     * removeOAuthAuthorizations - Remove all OAuth authorizations of a client
     *
     * ### Description:
     * Delete all authorizations of a client.
     *
     * ### Precondition:
     * Authenticated user and valid client ID
     *
     * ### Postcondition:
     * All authorizations for the client are revoked.
     *
     * ### Further Information:
     * None.
    **/
    removeOAuthAuthorizations(req: operations.RemoveOAuthAuthorizationsRequest, config?: AxiosRequestConfig): Promise<operations.RemoveOAuthAuthorizationsResponse>;
    /**
     * removeProfileAttribute - Remove user profile attribute
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.7.0</h3>
     *
     * ### Description:
     * Delete custom user profile attribute.
     *
     * ### Precondition:
     * None.
     *
     * ### Postcondition:
     * Custom user profile attribute is deleted.
     *
     * ### Further Information:
     * Allowed characters for keys are: `[a-zA-Z0-9_-]`
    **/
    removeProfileAttribute(req: operations.RemoveProfileAttributeRequest, config?: AxiosRequestConfig): Promise<operations.RemoveProfileAttributeResponse>;
    /**
     * removeUserKeyPair - Remove user's key pair
     *
     * ### Description:
     * Delete user key pair.
     *
     * ### Precondition:
     * Authenticated user.
     *
     * ### Postcondition:
     * Key pair is deleted.
     *
     * ### Further Information:
     * If parameter `version` is not set and two key versions exist, this API deletes version A.
     * If two keys with the same version are set, this API deletes the older one.
     *
     * This will also remove all file keys that were encrypted with the user public key.
     * If the user had exclusive access to some files, those are removed as well since decrypting them became impossible.
    **/
    removeUserKeyPair(req: operations.RemoveUserKeyPairRequest, config?: AxiosRequestConfig): Promise<operations.RemoveUserKeyPairResponse>;
    /**
     * requestAvatar - Request avatar
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>
     *
     * ### Description:
     * Get the avatar.
     *
     * ### Precondition:
     * Authenticated user.
     *
     * ### Postcondition:
     * Avatar is returned.
     *
     * ### Further Information:
     * None.
    **/
    requestAvatar(req: operations.RequestAvatarRequest, config?: AxiosRequestConfig): Promise<operations.RequestAvatarResponse>;
    /**
     * requestCustomerInfo - Request customer information for user
     *
     * ### Description:
     * Use this API to get:
     * * customer name
     * * used / free space
     * * used / available
     * * user account info
     *
     * of the according customer.
     *
     * ### Precondition:
     * Authenticated user.
     *
     * ### Postcondition:
     * Customer information is returned.
     *
     * ### Further Information:
     * None.
    **/
    requestCustomerInfo(req: operations.RequestCustomerInfoRequest, config?: AxiosRequestConfig): Promise<operations.RequestCustomerInfoResponse>;
    /**
     * requestCustomerKeyPair - Request customer's key pair
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.24.0</h3>
     *
     * ### Use `GET /settings/keypair` API
     *
     * ### Description:
     * Retrieve the customer rescue key pair.
     *
     * ### Precondition:
     * Authenticated user.
     *
     * ### Postcondition:
     * Key pair is returned.
     *
     * ### Further Information:
     * The private key is password-based encrypted with `AES256` / `PBKDF2`.
    **/
    requestCustomerKeyPair(req: operations.RequestCustomerKeyPairRequest, config?: AxiosRequestConfig): Promise<operations.RequestCustomerKeyPairResponseOutput>;
    /**
     * requestListOfNotificationConfigs - Request list of notification configurations
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
     *
     * ### Description:
     * Retrieve a list of notification configurations for current user.
     *
     * ### Precondition:
     * Authenticated user.
     *
     * ### Postcondition:
     * List of available notification configurations is returned.
     *
     * ### Further Information:
     * None.
    **/
    requestListOfNotificationConfigs(req: operations.RequestListOfNotificationConfigsRequest, config?: AxiosRequestConfig): Promise<operations.RequestListOfNotificationConfigsResponse>;
    /**
     * requestOAuthApprovals - Request list of OAuth client approvals
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.22.0</h3>
     *
     * ### Functional Description:
     * Retrieve information about all OAuth client approvals.
     *
     * ### Precondition:
     * Authenticated user.
     *
     * ### Postcondition:
     * None.
     *
     * ### Further Information:
     * None.
     *
     * ### Sorting:
     * Sort string syntax: `FIELD_NAME:ORDER`
     * `ORDER` can be `asc` or `desc`.
     * Multiple sort criteria are possible.
     * Fields are connected via logical conjunction **AND**.
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `clientName:desc`
     * Sort by `clientName` descending.
     *
     * </details>
     *
     * ### Sorting options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Description |
     * | :--- | :--- |
     * | `clientName` | Client name |
     *
     * </details>
    **/
    requestOAuthApprovals(req: operations.RequestOAuthApprovalsRequest, config?: AxiosRequestConfig): Promise<operations.RequestOAuthApprovalsResponse>;
    /**
     * requestOAuthAuthorizations - Request list of OAuth client authorizations
     *
     * ### Description:
     * Retrieve information about all OAuth client authorizations.
     *
     * ### Precondition:
     * Authenticated user.
     *
     * ### Postcondition:
     * List of OAuth client authorizations is returned.
     *
     * ### Further Information:
     *
     * ### Filtering:
     * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `isStandard:eq:true`
     * Get standard OAuth clients.
     *
     * </details>
     *
     * ### Filtering options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
     * | :--- | :--- | :--- | :--- | :--- |
     * | `isStandard` | Standard client filter | `eq` |  | `true or false` |
     *
     * </details>
     *
     * ---
     *
     * ### Sorting:
     * Sort string syntax: `FIELD_NAME:ORDER`
     * `ORDER` can be `asc` or `desc`.
     * Multiple sort criteria are possible.
     * Fields are connected via logical conjunction **AND**.
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `clientName:desc`
     * Sort by `clientName` descending.
     *
     * </details>
     *
     * ### Sorting options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Description |
     * | :--- | :--- |
     * | `clientName` | Client name |
     *
     * </details>
    **/
    requestOAuthAuthorizations(req: operations.RequestOAuthAuthorizationsRequest, config?: AxiosRequestConfig): Promise<operations.RequestOAuthAuthorizationsResponse>;
    /**
     * requestProfileAttributes - Request user profile attributes
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.7.0</h3>
     *
     * ### Description:
     * Retrieve a list of user profile attributes.
     *
     * ### Precondition:
     * None.
     *
     * ### Postcondition:
     * List of attributes is returned.
     *
     * ### Further Information:
     *
     * ### Filtering:
     * All filter fields are connected via logical conjunction (**AND**)
     * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `key:cn:searchString_1|value:cn:searchString_2`
     * Filter by attribute key contains `searchString_1` **AND** attribute value contains `searchString_2`.
     *
     * </details>
     *
     * ### Filtering options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
     * | :--- | :--- | :--- | :--- | :--- |
     * | `key` | User profile attribute key filter | `cn, eq, sw` | Attribute key contains / equals / starts with value. | `search String` |
     * | `value` | User profile attribute value filter | `cn, eq, sw` | Attribute value contains / equals / starts with value. | `search String` |
     *
     * </details>
     *
     * ---
     *
     * ### Sorting:
     * Sort string syntax: `FIELD_NAME:ORDER`
     * `ORDER` can be `asc` or `desc`.
     * Multiple sort fields are supported.
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `key:asc|value:desc`
     * Sort by `key` ascending **AND** by `value` descending.
     *
     * </details>
     *
     * ### Sorting options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Description |
     * | :--- | :--- |
     * | `key` | User profile attribute key |
     * | `value` | User profile attribute value |
     *
     * </details>
    **/
    requestProfileAttributes(req: operations.RequestProfileAttributesRequest, config?: AxiosRequestConfig): Promise<operations.RequestProfileAttributesResponse>;
    /**
     * requestUserInfo - Request user account information
     *
     * ### Description:
     * Retrieves all information regarding the current user's account.
     *
     * ### Precondition:
     * Authenticated user.
     *
     * ### Postcondition:
     * User information is returned.
     *
     * ### Further Information:
     * Setting the query parameter `more_info` to `true`, causes the API to return more details e.g. the user's groups.
     *
     * `customer` (`CustomerData`) attribute in `UserAccount` response model is deprecated. Please use response from `GET /user/account/customer` instead.
    **/
    requestUserInfo(req: operations.RequestUserInfoRequest, config?: AxiosRequestConfig): Promise<operations.RequestUserInfoResponse>;
    /**
     * requestUserKeyPair - Request user's key pair
     *
     * ### Description:
     * Retrieve the user key pair.
     *
     * ### Precondition:
     * Authenticated user.
     *
     * ### Postcondition:
     * Key pair is returned.
     *
     * ### Further Information:
     * The private key is password-based encrypted with `AES256` / `PBKDF2`.
    **/
    requestUserKeyPair(req: operations.RequestUserKeyPairRequest, config?: AxiosRequestConfig): Promise<operations.RequestUserKeyPairResponseOutput>;
    /**
     * requestUserKeyPairs - Request all user key pairs
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
     *
     * ### Description:
     * Retrieve all user key pairs to allow re-encrypting file keys without need for a second distributor.
     *
     * ### Precondition:
     * Authenticated user.
     *
     * ### Postcondition:
     * List of key pairs is returned.
     *
     * ### Further Information:
     * None.
    **/
    requestUserKeyPairs(req: operations.RequestUserKeyPairsRequest, config?: AxiosRequestConfig): Promise<operations.RequestUserKeyPairsResponseOutput>;
    /**
     * resetAvatar - Reset avatar
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>
     *
     * ### Description:
     * Reset (custom) avatar to default avatar.
     *
     * ### Precondition:
     * Authenticated user.
     *
     * ### Postcondition:
     * * User's avatar gets deleted.
     * * Default avatar is set.
     *
     * ### Further Information:
     * None.
    **/
    resetAvatar(req: operations.ResetAvatarRequest, config?: AxiosRequestConfig): Promise<operations.ResetAvatarResponse>;
    /**
     * setProfileAttributes - Set user profile attributes
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128679; Deprecated since v4.12.0</h3>
     *
     * ### Description:
     * Set custom user profile attributes.
     *
     * ### Precondition:
     * None.
     *
     * ### Postcondition:
     * Custom user profile attributes are set.
     *
     * ### Further Information:
     * Batch function.
     * All existing user profile attributes will be deleted.
     *
     * * Allowed characters for keys are: `[a-zA-Z0-9_-]`
     * * Characters are **case-insensitive**
     * * Maximum key length is **255**
     * * Maximum value length is **4096**
    **/
    setProfileAttributes(req: operations.SetProfileAttributesRequest, config?: AxiosRequestConfig): Promise<operations.SetProfileAttributesResponse>;
    /**
     * setUserKeyPair - Set user's key pair
     *
     * ### Description:
     * Set the user key pair.
     *
     * ### Precondition:
     * Authenticated user.
     *
     * ### Postcondition:
     * Key pair is set.
     *
     * ### Further Information:
     * Overwriting an existing key pair is **NOT** possible.
     * Please delete the existing key pair first.
     * The private key is password-based encrypted with `AES256` / `PBKDF2`.
    **/
    setUserKeyPair(req: operations.SetUserKeyPairRequest, config?: AxiosRequestConfig): Promise<operations.SetUserKeyPairResponse>;
    /**
     * subscribeDownloadShare - Subscribe Download Share for notifications
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
     *
     * ### Description:
     * Subscribe Download Share for notifications.
     *
     * ### Precondition:
     * User with _"manage download share"_ permissions on target node.
     *
     * ### Postcondition:
     * Download Share is subscribed.
     * Notifications for this Download Share will be triggered in the future.
     *
     * ### Further Information:
     * None.
    **/
    subscribeDownloadShare(req: operations.SubscribeDownloadShareRequest, config?: AxiosRequestConfig): Promise<operations.SubscribeDownloadShareResponse>;
    /**
     * subscribeDownloadShares - Subscribe or Unsubscribe a List of Download Shares for notifications
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.25.0</h3>
     *
     * ### Description:
     * Subscribe/Unsubscribe download shares for notifications.
     *
     * ### Precondition:
     * User with _"manage download share"_ permissions on target node.
     *
     *
     *
     * ### Postcondition:
     * Download shares are subscribed or unsubscribed.
     * Notifications for these download shares will be triggered in the future.
     *
     * ### Further Information:
     * Maximum number of subscriptions is 200.
    **/
    subscribeDownloadShares(req: operations.SubscribeDownloadSharesRequest, config?: AxiosRequestConfig): Promise<operations.SubscribeDownloadSharesResponse>;
    /**
     * subscribeNode - Subscribe node for notifications
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
     *
     * ### Description:
     * Subscribe node for notifications.
     *
     * ### Precondition:
     * User has _"read"_ permissions in auth parent room.
     *
     * ### Postcondition:
     * Node is subscribed.
     * Notifications for this node will be triggered in the future.
     *
     * ### Further Information:
     * None.
    **/
    subscribeNode(req: operations.SubscribeNodeRequest, config?: AxiosRequestConfig): Promise<operations.SubscribeNodeResponse>;
    /**
     * subscribeUploadShare - Subscribe Upload Share for notifications
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
     *
     * ### Description:
     * Subscribe Upload Share for notifications.
     *
     * ### Precondition:
     * User with _"manage upload share"_ permissions on target node.
     *
     * ### Postcondition:
     * Upload Share is subscribed.
     * Notifications for this Upload Share will be triggered in the future.
     *
     * ### Further Information:
     * None.
    **/
    subscribeUploadShare(req: operations.SubscribeUploadShareRequest, config?: AxiosRequestConfig): Promise<operations.SubscribeUploadShareResponse>;
    /**
     * subscribeUploadShares - Subscribe or Unsubscribe a List of Upload Shares for notifications
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.25.0</h3>
     *
     * ### Description:
     * Subscribe/Unsubscribe upload shares for notifications.
     *
     * ### Precondition:
     * User with _"manage upload share"_ permissions on target node.
     *
     *
     *
     * ### Postcondition:
     * Upload shares are subscribed or unsubscribed.
     * Notifications for these upload shares will be triggered in the future.
     *
     * ### Further Information:
     * Maximum number of subscriptions is 200.
    **/
    subscribeUploadShares(req: operations.SubscribeUploadSharesRequest, config?: AxiosRequestConfig): Promise<operations.SubscribeUploadSharesResponse>;
    /**
     * unsubscribeDownloadShare - Unsubscribe Download Share from notifications
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
     *
     * ### Description:
     * Unsubscribe Download Share from notifications.
     *
     * ### Precondition:
     * User with _"manage download share"_ permissions on target node.
     *
     * ### Postcondition:
     * Download Share is unsubscribed.
     * Notifications for this Download Share are disabled.
     *
     * ### Further Information:
     * None.
    **/
    unsubscribeDownloadShare(req: operations.UnsubscribeDownloadShareRequest, config?: AxiosRequestConfig): Promise<operations.UnsubscribeDownloadShareResponse>;
    /**
     * unsubscribeNode - Unsubscribe node from notifications
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
     *
     * ### Description:
     * Unsubscribe node from notifications.
     *
     * ### Precondition:
     * User has _"read"_ permissions in auth parent room.
     *
     * ### Postcondition:
     * Node is unsubscribed.
     * Notifications for this node are disabled.
     *
     * ### Further Information:
     * None.
    **/
    unsubscribeNode(req: operations.UnsubscribeNodeRequest, config?: AxiosRequestConfig): Promise<operations.UnsubscribeNodeResponse>;
    /**
     * unsubscribeUploadShare - Unsubscribe Upload Share from notifications
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.24.0</h3>
     *
     * ### Description:
     * Unsubscribe Upload Share from notifications.
     *
     * ### Precondition:
     * User with _"manage upload share"_ permissions on target node.
     *
     * ### Postcondition:
     * Upload Share is unsubscribed.
     * Notifications for this Upload Share are disabled.
     *
     * ### Further Information:
     * None.
    **/
    unsubscribeUploadShare(req: operations.UnsubscribeUploadShareRequest, config?: AxiosRequestConfig): Promise<operations.UnsubscribeUploadShareResponse>;
    /**
     * updateNodeSubscriptions - Subscribe or Unsubscribe a List of nodes for notifications
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.25.0</h3>
     *
     * ### Description:
     * Subscribe/Unsubscribe nodes for notifications.
     *
     * ### Precondition:
     * User has _"read"_ permissions in auth parent room.
     *
     * ### Postcondition:
     * Nodes are subscribed or unsubscribed.
     * Notifications for these nodes will be triggered in the future.
     *
     * ### Further Information:
     * Maximum number of subscriptions is 200.
    **/
    updateNodeSubscriptions(req: operations.UpdateNodeSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNodeSubscriptionsResponse>;
    /**
     * updateNotificationConfig - Update notification configuration
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.20.0</h3>
     *
     * ### Description:
     * Update notification configuration for current user.
     *
     * ### Precondition:
     * Authenticated user.
     *
     * ### Postcondition:
     * Notification configuration is updated.
     *
     * ### Further Information:
     * Leave `channelIds` empty to disable notifications.
    **/
    updateNotificationConfig(req: operations.UpdateNotificationConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNotificationConfigResponse>;
    /**
     * updateProfileAttributes - Add or edit user profile attributes
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.7.0</h3>
     *
     * ### Description:
     * Add or edit custom user profile attributes.
     * <br/><br/><span style="font-weight: bold; color: red;"> &#128679; **Warning: Please note that the response with HTTP status code 200 (OK) is deprecated and will be replaced with HTTP status code 204 (No content)!**</span><br/>
     *
     * ### Precondition:
     * None.
     *
     * ### Postcondition:
     * Custom user profile attributes are added or edited.
     *
     * ### Further Information:
     * Batch function.
     * If an entry existed before, it will be overwritten.
     * Range submodel is never returned.
     *
     * * Allowed characters for keys are: `[a-zA-Z0-9_-]`
     * * Characters are **case-insensitive**
     * * Maximum key length is **255**
     * * Maximum value length is **4096**
    **/
    updateProfileAttributes(req: operations.UpdateProfileAttributesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProfileAttributesResponse>;
    /**
     * updateUserAccount - Update user account
     *
     * ### Description:
     * Update current user's account.
     *
     * ### Precondition:
     * Authenticated user.
     *
     * ### Postcondition:
     * User's account is updated.
     *
     * ### Further Information:
     * * All input fields are limited to **150** characters.
     * * **All** characters are allowed.
     *
     * `customer` (`CustomerData`) attribute in `UserAccount` response model is deprecated. Please use response from `GET /user/account/customer` instead.
    **/
    updateUserAccount(req: operations.UpdateUserAccountRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserAccountResponse>;
    /**
     * uploadAvatarAsMultipart - Change avatar
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>
     *
     * ### Description:
     * Change the avatar.
     *
     * ### Precondition:
     * Authenticated user.
     *
     * ### Postcondition:
     * Avatar is changed.
     *
     * ### Further Information:
     * * Media type **MUST** be `jpeg` or `png`
     * * File size **MUST** bei less than `5 MB`
     * * Dimensions **MUST** be `256x256 px`
    **/
    uploadAvatarAsMultipart(req: operations.UploadAvatarAsMultipartRequest, config?: AxiosRequestConfig): Promise<operations.UploadAvatarAsMultipartResponse>;
}
