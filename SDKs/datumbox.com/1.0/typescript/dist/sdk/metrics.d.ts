import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Metrics {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * documentSimilarity - Estimates the similarity between 2 Documents
     *
     * The Document Similarity function estimates the degree of similarity between two documents. It can be used to detect duplicate webpages or detect plagiarism.
    **/
    documentSimilarity(req: operations.DocumentSimilarityRequest, config?: AxiosRequestConfig): Promise<operations.DocumentSimilarityResponse>;
}
