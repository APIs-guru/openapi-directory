import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * The Adult Content Detection function classifies the documents as adult or noadult based on their context. It can be used to detect whether a document contains content unsuitable for minors.
    **/
    AdultContentDetection(req: operations.AdultContentDetectionRequest, config?: AxiosRequestConfig): Promise<operations.AdultContentDetectionResponse>;
    /**
     * The Commercial Detection function labels the documents as commercial or non-commercial based on their keywords and expressions. It can be used to detect whether a website is commercial or not.
    **/
    CommercialDetection(req: operations.CommercialDetectionRequest, config?: AxiosRequestConfig): Promise<operations.CommercialDetectionResponse>;
    /**
     * The Document Similarity function estimates the degree of similarity between two documents. It can be used to detect duplicate webpages or detect plagiarism.
    **/
    DocumentSimilarity(req: operations.DocumentSimilarityRequest, config?: AxiosRequestConfig): Promise<operations.DocumentSimilarityResponse>;
    /**
     * The Educational Detection function classifies the documents as educational or non-educational based on their context. It can be used to detect whether a website is educational or not.
    **/
    EducationalDetection(req: operations.EducationalDetectionRequest, config?: AxiosRequestConfig): Promise<operations.EducationalDetectionResponse>;
    /**
     * The Gender Detection function identifies if a particular document is written-by or targets-to a man or a woman based on the context, the words and the idioms found in the text.
    **/
    GenderDetection(req: operations.GenderDetectionRequest, config?: AxiosRequestConfig): Promise<operations.GenderDetectionResponse>;
    /**
     * The Keyword Extraction function enables you to extract from an arbitrary document all the keywords and word-combinations along with their occurrences in the text.
    **/
    KeywordExtraction(req: operations.KeywordExtractionRequest, config?: AxiosRequestConfig): Promise<operations.KeywordExtractionResponse>;
    /**
     * The Language Detection function identifies the natural language of the given document based on its words and context. This classifier is able to detect 96 different languages.
    **/
    LanguageDetection(req: operations.LanguageDetectionRequest, config?: AxiosRequestConfig): Promise<operations.LanguageDetectionResponse>;
    /**
     * The Readability Assessment function determines the degree of readability of a document based on its terms and idioms. The texts are classified as basic, intermediate and advanced depending their difficulty.
    **/
    ReadabilityAssessment(req: operations.ReadabilityAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.ReadabilityAssessmentResponse>;
    /**
     * The Sentiment Analysis function classifies documents as positive, negative or neutral (lack of sentiment) depending on whether they express a positive, negative or neutral opinion.
    **/
    SentimentAnalysis(req: operations.SentimentAnalysisRequest, config?: AxiosRequestConfig): Promise<operations.SentimentAnalysisResponse>;
    /**
     * The Spam Detection function labels documents as spam or nospam by taking into account their context. It can be used to filter out spam emails and comments.
    **/
    SpamDetection(req: operations.SpamDetectionRequest, config?: AxiosRequestConfig): Promise<operations.SpamDetectionResponse>;
    /**
     * The Subjectivity Analysis function categorizes documents as subjective or objective based on their writing style. Texts that express personal opinions are labeled as subjective and the others as objective.
    **/
    SubjectivityAnalysis(req: operations.SubjectivityAnalysisRequest, config?: AxiosRequestConfig): Promise<operations.SubjectivityAnalysisResponse>;
    /**
     * The Text Extraction function enables you to extract the important information from a given webpage. Extracting the clear text of the documents is an important step before any other analysis.
    **/
    TextExtraction(req: operations.TextExtractionRequest, config?: AxiosRequestConfig): Promise<operations.TextExtractionResponse>;
    /**
     * The Topic Classification function assigns documents in 12 thematic categories based on their keywords, idioms and jargon. It can be used to identify the topic of the texts.
    **/
    TopicClassification(req: operations.TopicClassificationRequest, config?: AxiosRequestConfig): Promise<operations.TopicClassificationResponse>;
    /**
     * The Twitter Sentiment Analysis function allows you to perform Sentiment Analysis on Twitter. It classifies the tweets as positive, negative or neutral depending on their context.
    **/
    TwitterSentimentAnalysis(req: operations.TwitterSentimentAnalysisRequest, config?: AxiosRequestConfig): Promise<operations.TwitterSentimentAnalysisResponse>;
}
export {};
