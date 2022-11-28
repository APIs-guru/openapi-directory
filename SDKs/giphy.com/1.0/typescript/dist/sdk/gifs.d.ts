import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Gifs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getGifById - Get GIF by Id
     *
     * Returns a GIF given that GIF's unique ID
     *
    **/
    getGifById(req: operations.GetGifByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetGifByIdResponse>;
    /**
     * getGifsById - Get GIFs by ID
     *
     * A multiget version of the get GIF by ID endpoint.
     *
    **/
    getGifsById(req: operations.GetGifsByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetGifsByIdResponse>;
    /**
     * randomGif - Random GIF
     *
     * Returns a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the GIPHY catalog.
     *
    **/
    randomGif(req: operations.RandomGifRequest, config?: AxiosRequestConfig): Promise<operations.RandomGifResponse>;
    /**
     * searchGifs - Search GIFs
     *
     * Search all GIPHY GIFs for a word or phrase. Punctuation will be stripped and ignored.  Use a plus or url encode for phrases. Example paul+rudd, ryan+gosling or american+psycho.
     *
    **/
    searchGifs(req: operations.SearchGifsRequest, config?: AxiosRequestConfig): Promise<operations.SearchGifsResponse>;
    /**
     * translateGif - Translate phrase to GIF
     *
     * The translate API draws on search, but uses the GIPHY `special sauce` to handle translating from one vocabulary to another. In this case, words and phrases to GIF
     *
    **/
    translateGif(req: operations.TranslateGifRequest, config?: AxiosRequestConfig): Promise<operations.TranslateGifResponse>;
    /**
     * trendingGifs - Trending GIFs
     *
     * Fetch GIFs currently trending online. Hand curated by the GIPHY editorial team.  The data returned mirrors the GIFs showcased on the GIPHY homepage. Returns 25 results by default.
     *
    **/
    trendingGifs(req: operations.TrendingGifsRequest, config?: AxiosRequestConfig): Promise<operations.TrendingGifsResponse>;
}
