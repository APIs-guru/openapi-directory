import requests
from sdk.models import operations
from . import utils

class DocumentClassification:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def adult_content_detection(self, request: operations.AdultContentDetectionRequest) -> operations.AdultContentDetectionResponse:
        r"""Classifies the Document as adult or noadult
        The Adult Content Detection function classifies the documents as adult or noadult based on their context. It can be used to detect whether a document contains content unsuitable for minors.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/1.0/AdultContentDetection.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AdultContentDetectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def commercial_detection(self, request: operations.CommercialDetectionRequest) -> operations.CommercialDetectionResponse:
        r"""Classifies the Document as commercial or nocommercial
        The Commercial Detection function labels the documents as commercial or non-commercial based on their keywords and expressions. It can be used to detect whether a website is commercial or not.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/1.0/CommercialDetection.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CommercialDetectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def educational_detection(self, request: operations.EducationalDetectionRequest) -> operations.EducationalDetectionResponse:
        r"""Classifies the Document as educational or noeducational
        The Educational Detection function classifies the documents as educational or non-educational based on their context. It can be used to detect whether a website is educational or not.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/1.0/EducationalDetection.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EducationalDetectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def gender_detection(self, request: operations.GenderDetectionRequest) -> operations.GenderDetectionResponse:
        r"""Gender Detection Service
        The Gender Detection function identifies if a particular document is written-by or targets-to a man or a woman based on the context, the words and the idioms found in the text.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/1.0/GenderDetection.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GenderDetectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def language_detection(self, request: operations.LanguageDetectionRequest) -> operations.LanguageDetectionResponse:
        r"""Identifies the Language of the Document
        The Language Detection function identifies the natural language of the given document based on its words and context. This classifier is able to detect 96 different languages.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/1.0/LanguageDetection.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.LanguageDetectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def readability_assessment(self, request: operations.ReadabilityAssessmentRequest) -> operations.ReadabilityAssessmentResponse:
        r"""Evaluates the Readability of the Document
        The Readability Assessment function determines the degree of readability of a document based on its terms and idioms. The texts are classified as basic, intermediate and advanced depending their difficulty.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/1.0/ReadabilityAssessment.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReadabilityAssessmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def sentiment_analysis(self, request: operations.SentimentAnalysisRequest) -> operations.SentimentAnalysisResponse:
        r"""Identifies the Sentiment of the Document
        The Sentiment Analysis function classifies documents as positive, negative or neutral (lack of sentiment) depending on whether they express a positive, negative or neutral opinion.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/1.0/SentimentAnalysis.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SentimentAnalysisResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def spam_detection(self, request: operations.SpamDetectionRequest) -> operations.SpamDetectionResponse:
        r"""Classifies the Document as spam or nospam
        The Spam Detection function labels documents as spam or nospam by taking into account their context. It can be used to filter out spam emails and comments.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/1.0/SpamDetection.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SpamDetectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def subjectivity_analysis(self, request: operations.SubjectivityAnalysisRequest) -> operations.SubjectivityAnalysisResponse:
        r"""Classifies Document as Subjective or Objective
        The Subjectivity Analysis function categorizes documents as subjective or objective based on their writing style. Texts that express personal opinions are labeled as subjective and the others as objective.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/1.0/SubjectivityAnalysis.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SubjectivityAnalysisResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def topic_classification(self, request: operations.TopicClassificationRequest) -> operations.TopicClassificationResponse:
        r"""Identifies the Topic of the Document
        The Topic Classification function assigns documents in 12 thematic categories based on their keywords, idioms and jargon. It can be used to identify the topic of the texts.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/1.0/TopicClassification.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TopicClassificationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def twitter_sentiment_analysis(self, request: operations.TwitterSentimentAnalysisRequest) -> operations.TwitterSentimentAnalysisResponse:
        r"""Identifies the Sentiment of Twitter Messages
        The Twitter Sentiment Analysis function allows you to perform Sentiment Analysis on Twitter. It classifies the tweets as positive, negative or neutral depending on their context.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/1.0/TwitterSentimentAnalysis.json"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TwitterSentimentAnalysisResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    