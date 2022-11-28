import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Shares {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createDownloadShare - Create new Download Share
     *
     * ### Description:
     * Create a new Download Share.
     *
     * ### Precondition:
     * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.
     *
     * ### Postcondition:
     * Download Share is created.
     *
     * ### Further Information:
     *
     * If the target node is a room: subordinary rooms are excluded from a Download Share.
     *
     * * `name` is limited to **150** characters.
     * * `notes` are limited to **255** characters.
     * * `password` is limited to **1024** characters.
     *
     * Use `POST /shares/downloads/{share_id}/email` API for sending emails.
     *
     * Forbidden characters in passwords: [`&`, `'`, `<`, `>`]
    **/
    createDownloadShare(req: operations.CreateDownloadShareRequest, config?: AxiosRequestConfig): Promise<operations.CreateDownloadShareResponse>;
    /**
     * createUploadShare - Create new Upload Share
     *
     * ### Description:
     * Create a new Upload Share (aka File Request).
     *
     * ### Precondition:
     * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.
     *
     * ### Postcondition:
     * Upload Share is created.
     *
     * ### Further Information:
     *
     * * `name` is limited to **150** characters.
     * * `notes` are limited to **255** characters.
     * * `password` is limited to **1024** characters.
     *
     * Forbidden characters in passwords: [`&`, `'`, `<`, `>`]
     *
     * Use `POST /shares/uploads/{share_id}/email` API for sending emails.
     *
    **/
    createUploadShare(req: operations.CreateUploadShareRequest, config?: AxiosRequestConfig): Promise<operations.CreateUploadShareResponse>;
    /**
     * deleteDownloadShares - Remove Download Shares
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.21.0</h3>
     *
     * ### Functional Description:
     * Delete multiple Download Shares.
     *
     * ### Precondition:
     * User with _"manage download share"_ permissions on target nodes.
     *
     * ### Postcondition:
     * Download Shares are deleted.
     *
     * ### Further Information:
     * Only the Download Shares are removed; the referenced files or containers persists.
    **/
    deleteDownloadShares(req: operations.DeleteDownloadSharesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDownloadSharesResponse>;
    /**
     * deleteUploadShares - Remove Upload Shares
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.21.0</h3>
     *
     * ### Functional Description:
     * Delete multiple Upload Shares (aka Upload Accounts).
     *
     * ### Precondition:
     * User has _"manage upload share"_ permissions on target containers.
     *
     * ### Postcondition:
     * Upload Shares are deleted.
     *
     * ### Further Information:
     * Only the Upload Shares are removed; already uploaded files and the target container persist.
    **/
    deleteUploadShares(req: operations.DeleteUploadSharesRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUploadSharesResponse>;
    /**
     * removeDownloadShare - Remove Download Share
     *
     * ### Description:
     * Delete a Download Share.
     *
     * ### Precondition:
     * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.
     *
     * ### Postcondition:
     * Download Share is deleted.
     *
     * ### Further Information:
     * Only the Download Share is removed; the referenced file or container persists.
    **/
    removeDownloadShare(req: operations.RemoveDownloadShareRequest, config?: AxiosRequestConfig): Promise<operations.RemoveDownloadShareResponse>;
    /**
     * removeUploadShare - Remove Upload Share
     *
     * ### Description:
     * Delete an Upload Share (aka File Request).
     *
     * ### Precondition:
     * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.
     *
     * ### Postcondition:
     * Upload Share is deleted.
     *
     * ### Further Information:
     * Only the Upload Share is removed; already uploaded files and the target container persist.
    **/
    removeUploadShare(req: operations.RemoveUploadShareRequest, config?: AxiosRequestConfig): Promise<operations.RemoveUploadShareResponse>;
    /**
     * requestDownloadShare - Request Download Share
     *
     * ### Description:
     * Retrieve detailed information about one Download Share.
     *
     * ### Precondition:
     * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.
     *
     * ### Postcondition:
     * Download Share is returned
     *
     * ### Further Information:
     * None.
    **/
    requestDownloadShare(req: operations.RequestDownloadShareRequest, config?: AxiosRequestConfig): Promise<operations.RequestDownloadShareResponse>;
    /**
     * requestDownloadShareQr - Request Download Share via QR Code
     *
     * ### Description:
     * Retrieve detailed information about one Download Share.
     *
     * ### Precondition:
     * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.
     *
     * ### Postcondition:
     * Download Share is returned
     *
     * ### Further Information:
     * None.
    **/
    requestDownloadShareQr(req: operations.RequestDownloadShareQrRequest, config?: AxiosRequestConfig): Promise<operations.RequestDownloadShareQrResponse>;
    /**
     * requestDownloadShares - Request list of Download Shares
     *
     * ### Description:
     * Retrieve a list of Download Shares.
     *
     * ### Precondition:
     * Authenticated user.
     *
     * ### Postcondition:
     * List of available Download Shares is returned.
     *
     * ### Further Information:
     *
     * ### Filtering:
     * All filter fields are connected via logical (**AND**). createdBy and updatedBy searches several user-related attributes.
     *
     * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `name:cn:searchString_1|createdBy:cn:searchString_2`
     * Filter by file name contains `searchString_1` **AND** creator info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains `searchString_2`.
     *
     * </details>
     *
     * ### Filtering options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
     * | :--- | :--- | :--- | :--- | :--- |
     * | `name` | Alias or node name filter | `cn` | Alias or node name contains value. | `search String` |
     * | `createdAt` | Creation date filter | `ge, le` | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
     * | `createdBy` | Creator info filter | `cn, eq` | Creator info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains value. | `search String` |
     * | `createdById` | Creator ID filter | `eq` | Creator ID equals value. | `positive Integer` |
     * | `accessKey` | Share access key filter | `cn` | Share access key contains values. | `search String` |
     * | `nodeId` | Source node ID | `eq` | Source node (room, folder, file) ID equals value. | `positive Integer` |
     * | `updatedBy` | Modifier info filter | `cn, eq` | Modifier info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains value. | `search String` |
     * | `updatedById` | Modifier ID filter | `eq` | Modifier ID equals value. | `positive Integer` |
     *
     * </details>
     * ### Deprecated filtering options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
     * | :--- | :--- | :--- | :--- | :--- |
     * | <del>`userId`</del>  | Creator user ID | `eq` | Creator user ID equals value. Use `createdById` instead | `positive Integer` |
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
     * `name:asc|expireAt:desc`
     * Sort by `name` ascending **AND** by `expireAt` descending.
     *
     * </details>
     *
     * ### Sorting options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Description |
     * | :--- | :--- |
     * | `name` | Alias or node name |
     * | `notifyCreator` | Notify creator on every download |
     * | `expireAt` | Expiration date |
     * | `createdAt` | Creation date |
     * | `createdBy` | Creator first name, last name |
     *
     * </details>
     *
     * ### Deprecated sorting options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Description |
     * | :--- | :--- |
     * | <del>`classification`</del> | Classification ID:<ul><li>1 - public</li><li>2 - internal</li><li>3 - confidential</li><li>4 - strictly confidential</li></ul> |
     *
     * </details>
    **/
    requestDownloadShares(req: operations.RequestDownloadSharesRequest, config?: AxiosRequestConfig): Promise<operations.RequestDownloadSharesResponse>;
    /**
     * requestUploadShare - Request Upload Share
     *
     * ### Description:
     * Retrieve detailed information about one Upload Share (aka File Request).
     *
     * ### Precondition:
     * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.
     *
     * ### Postcondition:
     * Upload Share is returned.
     *
     * ### Further Information:
     * None.
    **/
    requestUploadShare(req: operations.RequestUploadShareRequest, config?: AxiosRequestConfig): Promise<operations.RequestUploadShareResponse>;
    /**
     * requestUploadShareQr - Request Upload Share via QR Code
     *
     * ### Description:
     * Retrieve detailed information about one Upload Share (aka File Request).
     *
     * ### Precondition:
     * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.
     *
     * ### Postcondition:
     * Upload Share is returned.
     *
     * ### Further Information:
     * None.
    **/
    requestUploadShareQr(req: operations.RequestUploadShareQrRequest, config?: AxiosRequestConfig): Promise<operations.RequestUploadShareQrResponse>;
    /**
     * requestUploadShares - Request list of Upload Shares
     *
     * ### Description:
     * Retrieve a list of Upload Shares (aka File Requests).
     *
     * ### Precondition:
     * Authenticated user.
     *
     * ### Postcondition:
     * List of available Upload Shares is returned.
     *
     * ### Further Information:
     *
     * ### Filtering:
     * All filter fields are connected via logical (**AND**). createdBy and updatedBy searches several user-related attributes.
     * Filter string syntax: `FIELD_NAME:OPERATOR:VALUE[:VALUE...]`
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `name:cn:searchString_1|createdBy:cn:searchString_2`
     * Filter by alias name contains `searchString_1` **AND** creator info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains `searchString_2`.
     *
     * </details>
     *
     * ### Filtering options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
     * | :--- | :--- | :--- | :--- | :--- |
     * | `name` | Alias name filter | `cn` | Alias name contains value. | `search String` |
     * | `createdAt` | Creation date filter | `ge, le` | Creation date is greater / less equals than value.<br>Multiple operator values are allowed and will be connected via logical conjunction (**AND**).<br>e.g. `createdAt:ge:2016-12-31`&#124;`createdAt:le:2018-01-01` | `Date (yyyy-MM-dd)` |
     * | `createdBy` | Creator info filter | `cn, eq` | Creator info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains value. | `search String` |
     * | `createdById` | Creator ID filter | `eq` | Creator ID equals value. | `positive Integer` |
     * | `accessKey` | Share access key filter | `cn` | Share access key contains values. | `search String` |
     * | `userId` | Creator user ID | `eq` | Creator user ID equals value. | `positive Integer` |
     * | `targetId` | Target node ID | `eq` | Target node (room, folder) ID equals value. | `positive Integer` |
     * | `updatedBy` | Modifier info filter | `cn, eq` | Modifier info (`firstName` **OR** `lastName` **OR** `email` **OR** `username`) contains value. | `search String` |
     * | `updatedById` | Modifier ID filter | `eq` | Modifier ID equals value. | `positive Integer` |
     *
     * </details>
     *
     * ### Deprecated filtering options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Filter Description | `OPERATOR` | Operator Description | `VALUE` |
     * | :--- | :--- | :--- | :--- | :--- |
     * | <del>`targetId`</del> | Target node ID | `cn` | Target node (room, folder) ID equals value. | `positive Integer` |
     * | <del>`userId` </del>| Creator user ID | `eq` | Creator user ID equals value. Use `createdById` instead. | `positive Integer` |
     *
     * </details>
     *
     * ---
     *
     * Sort string syntax: `FIELD_NAME:ORDER`
     * `ORDER` can be `asc` or `desc`.
     * Multiple sort fields are supported.
     *
     * <details style="padding-left: 10px">
     * <summary style="cursor: pointer; outline: none"><strong>Example</strong></summary>
     *
     * `name:asc|expireAt:desc`
     * Sort by `name` ascending **AND** by `expireAt` descending.
     *
     * </details>
     *
     * ### Sorting options:
     * <details style="padding: 10px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px;">
     * <summary style="cursor: pointer; outline: none"><strong>Expand</strong></summary>
     *
     * | `FIELD_NAME` | Description |
     * | :--- | :--- |
     * | `name` | Alias name |
     * | `notifyCreator` | Notify creator on every upload |
     * | `expireAt` | Expiration date |
     * | `createdAt` | Creation date |
     * | `createdBy` | Creator first name, last name |
     *
     * </details>
    **/
    requestUploadShares(req: operations.RequestUploadSharesRequest, config?: AxiosRequestConfig): Promise<operations.RequestUploadSharesResponse>;
    /**
     * sendDownloadShareLinkViaEmail - Send an existing Download Share link via email
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>
     *
     * ### Description:
     * Send an email to specific recipients for existing Download Share.
     *
     * ### Precondition:
     * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.
     *
     * ### Postcondition:
     * Download Share link successfully sent.
     *
     * ### Further Information:
     * None.
    **/
    sendDownloadShareLinkViaEmail(req: operations.SendDownloadShareLinkViaEmailRequest, config?: AxiosRequestConfig): Promise<operations.SendDownloadShareLinkViaEmailResponse>;
    /**
     * sendUploadShareLinkViaEmail - Send an existing Upload Share link via email
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>
     *
     * ### Description:
     * Send an email to specific recipients for existing Upload Share.
     *
     * ### Precondition:
     * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.
     *
     * ### Postcondition:
     * Upload Share link successfully sent.
     *
     * ### Further Information:
     * None.
    **/
    sendUploadShareLinkViaEmail(req: operations.SendUploadShareLinkViaEmailRequest, config?: AxiosRequestConfig): Promise<operations.SendUploadShareLinkViaEmailResponse>;
    /**
     * updateDownloadShare - Update Download Share
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>
     *
     * ### Description:
     * Update an existing Download Share.
     *
     * ### Precondition:
     * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.
     *
     * ### Postcondition:
     * Download Share is successfully updated.
     *
     * ### Further Information:
     * * `name` is limited to **150** characters.
     * * `notes` are limited to **255** characters.
     * * `password` is limited to **1024** characters.
     *
     * Forbidden characters in passwords: [`&`, `'`, `<`, `>`]
    **/
    updateDownloadShare(req: operations.UpdateDownloadShareRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDownloadShareResponse>;
    /**
     * updateDownloadShares - Update a list of Download Shares
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.25.0</h3>
     *
     * ### Description:
     * Update a list of existing Download Shares.
     *
     * ### Precondition:
     * User with <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage download share</span> permissions on target node.
     *
     * ### Postcondition:
     * Download Shares are successfully updated.
     *
     * ### Further Information:
     * Maximum number of shares is 200
    **/
    updateDownloadShares(req: operations.UpdateDownloadSharesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDownloadSharesResponse>;
    /**
     * updateUploadShare - Update Upload Share
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>
     *
     * ### Description:
     * Update existing Upload Share (aka File Request).
     *
     * ### Precondition:
     * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.
     *
     * ### Postcondition:
     * Upload Share successfully updated.
     *
     * ### Further Information:
     *
     * * `name` is limited to **150** characters.
     * * `notes` are limited to **255** characters.
     * * `password` is limited to **1024** characters.
     *
     * Forbidden characters in passwords: [`&`, `'`, `<`, `>`]
    **/
    updateUploadShare(req: operations.UpdateUploadShareRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUploadShareResponse>;
    /**
     * updateUploadShares - Update List of Upload Shares
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.25.0</h3>
     *
     * ### Description:
     * Update a list of existing Upload Shares (aka File Request).
     *
     * ### Precondition:
     * User has <span style='padding: 3px; background-color: #F6F7F8; border: 1px solid #000; border-radius: 5px; display: inline;'>&#128275; manage upload share</span> permissions on target container.
     *
     * ### Postcondition:
     * Upload Shares successfully updated.
     *
     * ### Further Information:
     * Maximum number of shares is 200
    **/
    updateUploadShares(req: operations.UpdateUploadSharesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUploadSharesResponse>;
}
