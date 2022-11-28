import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Downloads {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * downloadAvatar - Download avatar
     *
     * <h3 style='padding: 5px; background-color: #F6F7F8; border: 1px solid #AAA; border-radius: 5px; display: table-cell;'>&#128640; Since v4.11.0</h3>
     *
     * ### Description:
     * Download avatar for given user ID and UUID.
     *
     * ### Precondition:
     * Valid UUID.
     *
     * ### Postcondition:
     * Stream is returned.
     *
     * ### Further Information:
     * None.
    **/
    downloadAvatar(req: operations.DownloadAvatarRequest, config?: AxiosRequestConfig): Promise<operations.DownloadAvatarResponse>;
    /**
     * downloadFileViaToken - Download file
     *
     * ### Description:
     * Download a file.
     *
     * ### Precondition:
     * Valid download token.
     *
     * ### Postcondition:
     * Stream is returned.
     *
     * ### Further Information:
     * Range requests are supported.
     *
     * https://tools.ietf.org/html/rfc7233 - Range Requests
    **/
    downloadFileViaToken(req: operations.DownloadFileViaTokenRequest, config?: AxiosRequestConfig): Promise<operations.DownloadFileViaTokenResponse>;
    /**
     * downloadFileViaToken1 - Download file
     *
     * ### Description:
     * Download a file.
     *
     * ### Precondition:
     * Valid download token.
     *
     * ### Postcondition:
     * Stream is returned.
     *
     * ### Further Information:
     * Range requests are supported.
     *
     * https://tools.ietf.org/html/rfc7233 - Range Requests
    **/
    downloadFileViaToken1(req: operations.DownloadFileViaToken1Request, config?: AxiosRequestConfig): Promise<operations.DownloadFileViaToken1Response>;
    /**
     * downloadZipArchiveViaToken - Download ZIP archive
     *
     * ### Description:
     * Download multiple files in a ZIP archive.
     *
     * ### Precondition:
     * Valid download token.
     *
     * ### Postcondition:
     * Stream is returned.
     *
     * ### Further Information:
     * Create a download token with `POST /nodes/zip` API.
    **/
    downloadZipArchiveViaToken(req: operations.DownloadZipArchiveViaTokenRequest, config?: AxiosRequestConfig): Promise<operations.DownloadZipArchiveViaTokenResponse>;
}
