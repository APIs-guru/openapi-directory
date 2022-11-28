import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Reviews {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * androidpublisherReviewsGet - Gets a single review.
    **/
    androidpublisherReviewsGet(req: operations.AndroidpublisherReviewsGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherReviewsGetResponse>;
    /**
     * androidpublisherReviewsList - Lists all reviews.
    **/
    androidpublisherReviewsList(req: operations.AndroidpublisherReviewsListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherReviewsListResponse>;
    /**
     * androidpublisherReviewsReply - Replies to a single review, or updates an existing reply.
    **/
    androidpublisherReviewsReply(req: operations.AndroidpublisherReviewsReplyRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherReviewsReplyResponse>;
}
