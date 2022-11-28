import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class InformationRetrieval {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * keywordExtraction - Extracts the Keywords of the Document
     *
     * The Keyword Extraction function enables you to extract from an arbitrary document all the keywords and word-combinations along with their occurrences in the text.
    **/
    keywordExtraction(req: operations.KeywordExtractionRequest, config?: AxiosRequestConfig): Promise<operations.KeywordExtractionResponse>;
    /**
     * textExtraction - Extracts the clear text from Webpage
     *
     * The Text Extraction function enables you to extract the important information from a given webpage. Extracting the clear text of the documents is an important step before any other analysis.
    **/
    textExtraction(req: operations.TextExtractionRequest, config?: AxiosRequestConfig): Promise<operations.TextExtractionResponse>;
}
