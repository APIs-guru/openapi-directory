import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DocumentClassification {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * adultContentDetection - Classifies the Document as adult or noadult
     *
     * The Adult Content Detection function classifies the documents as adult or noadult based on their context. It can be used to detect whether a document contains content unsuitable for minors.
    **/
    adultContentDetection(req: operations.AdultContentDetectionRequest, config?: AxiosRequestConfig): Promise<operations.AdultContentDetectionResponse>;
    /**
     * commercialDetection - Classifies the Document as commercial or nocommercial
     *
     * The Commercial Detection function labels the documents as commercial or non-commercial based on their keywords and expressions. It can be used to detect whether a website is commercial or not.
    **/
    commercialDetection(req: operations.CommercialDetectionRequest, config?: AxiosRequestConfig): Promise<operations.CommercialDetectionResponse>;
    /**
     * educationalDetection - Classifies the Document as educational or noeducational
     *
     * The Educational Detection function classifies the documents as educational or non-educational based on their context. It can be used to detect whether a website is educational or not.
    **/
    educationalDetection(req: operations.EducationalDetectionRequest, config?: AxiosRequestConfig): Promise<operations.EducationalDetectionResponse>;
    /**
     * genderDetection - Gender Detection Service
     *
     * The Gender Detection function identifies if a particular document is written-by or targets-to a man or a woman based on the context, the words and the idioms found in the text.
    **/
    genderDetection(req: operations.GenderDetectionRequest, config?: AxiosRequestConfig): Promise<operations.GenderDetectionResponse>;
    /**
     * languageDetection - Identifies the Language of the Document
     *
     * The Language Detection function identifies the natural language of the given document based on its words and context. This classifier is able to detect 96 different languages.
    **/
    languageDetection(req: operations.LanguageDetectionRequest, config?: AxiosRequestConfig): Promise<operations.LanguageDetectionResponse>;
    /**
     * readabilityAssessment - Evaluates the Readability of the Document
     *
     * The Readability Assessment function determines the degree of readability of a document based on its terms and idioms. The texts are classified as basic, intermediate and advanced depending their difficulty.
    **/
    readabilityAssessment(req: operations.ReadabilityAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.ReadabilityAssessmentResponse>;
    /**
     * sentimentAnalysis - Identifies the Sentiment of the Document
     *
     * The Sentiment Analysis function classifies documents as positive, negative or neutral (lack of sentiment) depending on whether they express a positive, negative or neutral opinion.
    **/
    sentimentAnalysis(req: operations.SentimentAnalysisRequest, config?: AxiosRequestConfig): Promise<operations.SentimentAnalysisResponse>;
    /**
     * spamDetection - Classifies the Document as spam or nospam
     *
     * The Spam Detection function labels documents as spam or nospam by taking into account their context. It can be used to filter out spam emails and comments.
    **/
    spamDetection(req: operations.SpamDetectionRequest, config?: AxiosRequestConfig): Promise<operations.SpamDetectionResponse>;
    /**
     * subjectivityAnalysis - Classifies Document as Subjective or Objective
     *
     * The Subjectivity Analysis function categorizes documents as subjective or objective based on their writing style. Texts that express personal opinions are labeled as subjective and the others as objective.
    **/
    subjectivityAnalysis(req: operations.SubjectivityAnalysisRequest, config?: AxiosRequestConfig): Promise<operations.SubjectivityAnalysisResponse>;
    /**
     * topicClassification - Identifies the Topic of the Document
     *
     * The Topic Classification function assigns documents in 12 thematic categories based on their keywords, idioms and jargon. It can be used to identify the topic of the texts.
    **/
    topicClassification(req: operations.TopicClassificationRequest, config?: AxiosRequestConfig): Promise<operations.TopicClassificationResponse>;
    /**
     * twitterSentimentAnalysis - Identifies the Sentiment of Twitter Messages
     *
     * The Twitter Sentiment Analysis function allows you to perform Sentiment Analysis on Twitter. It classifies the tweets as positive, negative or neutral depending on their context.
    **/
    twitterSentimentAnalysis(req: operations.TwitterSentimentAnalysisRequest, config?: AxiosRequestConfig): Promise<operations.TwitterSentimentAnalysisResponse>;
}
