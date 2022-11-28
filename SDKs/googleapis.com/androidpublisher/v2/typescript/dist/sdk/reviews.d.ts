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
     * androidpublisherReviewsGet - Returns a single review.
    **/
    androidpublisherReviewsGet(req: operations.AndroidpublisherReviewsGetRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherReviewsGetResponse>;
    /**
     * androidpublisherReviewsList - Returns a list of reviews. Only reviews from last week will be returned.
    **/
    androidpublisherReviewsList(req: operations.AndroidpublisherReviewsListRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherReviewsListResponse>;
    /**
     * androidpublisherReviewsReply - Reply to a single review, or update an existing reply.
    **/
    androidpublisherReviewsReply(req: operations.AndroidpublisherReviewsReplyRequest, config?: AxiosRequestConfig): Promise<operations.AndroidpublisherReviewsReplyResponse>;
}
