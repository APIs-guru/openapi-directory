import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Avatars {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * avatarsGetBrowser - Get Browser Icon
     *
     * You can use this endpoint to show different browser icons to your users. The code argument receives the browser code as it appears in your user /account/sessions endpoint. Use width, height and quality arguments to change the output settings.
    **/
    avatarsGetBrowser(req: operations.AvatarsGetBrowserRequest, config?: AxiosRequestConfig): Promise<operations.AvatarsGetBrowserResponse>;
    /**
     * avatarsGetCreditCard - Get Credit Card Icon
     *
     * The credit card endpoint will return you the icon of the credit card provider you need. Use width, height and quality arguments to change the output settings.
    **/
    avatarsGetCreditCard(req: operations.AvatarsGetCreditCardRequest, config?: AxiosRequestConfig): Promise<operations.AvatarsGetCreditCardResponse>;
    /**
     * avatarsGetFavicon - Get Favicon
     *
     * Use this endpoint to fetch the favorite icon (AKA favicon) of any remote website URL.
     *
    **/
    avatarsGetFavicon(req: operations.AvatarsGetFaviconRequest, config?: AxiosRequestConfig): Promise<operations.AvatarsGetFaviconResponse>;
    /**
     * avatarsGetFlag - Get Country Flag
     *
     * You can use this endpoint to show different country flags icons to your users. The code argument receives the 2 letter country code. Use width, height and quality arguments to change the output settings.
    **/
    avatarsGetFlag(req: operations.AvatarsGetFlagRequest, config?: AxiosRequestConfig): Promise<operations.AvatarsGetFlagResponse>;
    /**
     * avatarsGetImage - Get Image from URL
     *
     * Use this endpoint to fetch a remote image URL and crop it to any image size you want. This endpoint is very useful if you need to crop and display remote images in your app or in case you want to make sure a 3rd party image is properly served using a TLS protocol.
    **/
    avatarsGetImage(req: operations.AvatarsGetImageRequest, config?: AxiosRequestConfig): Promise<operations.AvatarsGetImageResponse>;
    /**
     * avatarsGetInitials - Get User Initials
     *
     * Use this endpoint to show your user initials avatar icon on your website or app. By default, this route will try to print your logged-in user name or email initials. You can also overwrite the user name if you pass the 'name' parameter. If no name is given and no user is logged, an empty avatar will be returned.
     *
     * You can use the color and background params to change the avatar colors. By default, a random theme will be selected. The random theme will persist for the user's initials when reloading the same theme will always return for the same initials.
    **/
    avatarsGetInitials(req: operations.AvatarsGetInitialsRequest, config?: AxiosRequestConfig): Promise<operations.AvatarsGetInitialsResponse>;
    /**
     * avatarsGetQr - Get QR Code
     *
     * Converts a given plain text to a QR code image. You can use the query parameters to change the size and style of the resulting image.
    **/
    avatarsGetQr(req: operations.AvatarsGetQrRequest, config?: AxiosRequestConfig): Promise<operations.AvatarsGetQrResponse>;
}
