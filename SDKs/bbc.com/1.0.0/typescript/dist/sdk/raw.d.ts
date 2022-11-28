import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Raw {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getRawAncestors - Get raw ancestors
     *
     * Get raw ancestors
    **/
    getRawAncestors(req: operations.GetRawAncestorsRequest, config?: AxiosRequestConfig): Promise<operations.GetRawAncestorsResponse>;
    /**
     * getRawBrand - Get raw brand
     *
     * Get raw brand
    **/
    getRawBrand(req: operations.GetRawBrandRequest, config?: AxiosRequestConfig): Promise<operations.GetRawBrandResponse>;
    /**
     * getRawBrandFranchises - Get raw brand franchise
     *
     * Get raw brand franchises
    **/
    getRawBrandFranchises(req: operations.GetRawBrandFranchisesRequest, config?: AxiosRequestConfig): Promise<operations.GetRawBrandFranchisesResponse>;
    /**
     * getRawEpisode - Get raw episode
     *
     * Get raw episode
    **/
    getRawEpisode(req: operations.GetRawEpisodeRequest, config?: AxiosRequestConfig): Promise<operations.GetRawEpisodeResponse>;
    /**
     * getRawFormats - Get raw formats
     *
     * Get raw formats
    **/
    getRawFormats(req: operations.GetRawFormatsRequest, config?: AxiosRequestConfig): Promise<operations.GetRawFormatsResponse>;
    /**
     * getRawGenreGroups - Get raw genre groups
     *
     * Get raw genre groups
    **/
    getRawGenreGroups(req: operations.GetRawGenreGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetRawGenreGroupsResponse>;
    /**
     * getRawImage - Get raw image
     *
     * Get raw image
    **/
    getRawImage(req: operations.GetRawImageRequest, config?: AxiosRequestConfig): Promise<operations.GetRawImageResponse>;
    /**
     * getRawMasterbrand - Get raw masterbrand
     *
     * Get raw masterbrand
    **/
    getRawMasterbrand(req: operations.GetRawMasterbrandRequest, config?: AxiosRequestConfig): Promise<operations.GetRawMasterbrandResponse>;
    /**
     * getRawPromotion - Get raw promotion
     *
     * Get raw promotion
    **/
    getRawPromotion(req: operations.GetRawPromotionRequest, config?: AxiosRequestConfig): Promise<operations.GetRawPromotionResponse>;
}
