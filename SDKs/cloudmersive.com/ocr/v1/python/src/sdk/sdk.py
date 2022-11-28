

import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://api.cloudmersive.com",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def image_ocr_image_lines_with_location(self, request: operations.ImageOcrImageLinesWithLocationRequest) -> operations.ImageOcrImageLinesWithLocationResponse:
        r"""Convert a scanned image into words with location
        Converts an uploaded image in common formats such as JPEG, PNG into lines/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ocr/image/to/lines-with-location"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ImageOcrImageLinesWithLocationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImageToLinesWithLocationResult])
                res.image_to_lines_with_location_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImageToLinesWithLocationResult])
                res.image_to_lines_with_location_result = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def image_ocr_image_words_with_location(self, request: operations.ImageOcrImageWordsWithLocationRequest) -> operations.ImageOcrImageWordsWithLocationResponse:
        r"""Convert a scanned image into words with location
        Converts an uploaded image in common formats such as JPEG, PNG into words/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ocr/image/to/words-with-location"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ImageOcrImageWordsWithLocationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImageToWordsWithLocationResult])
                res.image_to_words_with_location_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImageToWordsWithLocationResult])
                res.image_to_words_with_location_result = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def image_ocr_photo_recognize_business_card(self, request: operations.ImageOcrPhotoRecognizeBusinessCardRequest) -> operations.ImageOcrPhotoRecognizeBusinessCardResponse:
        r"""Recognize a photo of a business card, extract key business information
        Analyzes a photograph of a business card as input, and outputs key business information such as the name of the person, name of the business, the address of the business, the phone number, the email address and more.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ocr/photo/recognize/business-card"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ImageOcrPhotoRecognizeBusinessCardResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BusinessCardRecognitionResult])
                res.business_card_recognition_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BusinessCardRecognitionResult])
                res.business_card_recognition_result = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def image_ocr_photo_recognize_form_advanced(self, request: operations.ImageOcrPhotoRecognizeFormAdvancedRequest) -> operations.ImageOcrPhotoRecognizeFormAdvancedResponse:
        r"""Recognize a photo of a form, extract key fields using stored templates
        Analyzes a photograph of a form as input, and outputs key business fields and information.  Customzie data to be extracted by defining fields for the form.  Uses template definitions stored in Cloudmersive Configuration; to configure stored templates in a configuration bucket, log into Cloudmersive Management Portal and navigate to Settings &gt; API Configuration &gt; Create Bucket.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ocr/photo/recognize/form/advanced"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ImageOcrPhotoRecognizeFormAdvancedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FormRecognitionResult])
                res.form_recognition_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FormRecognitionResult])
                res.form_recognition_result = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def image_ocr_photo_recognize_receipt(self, request: operations.ImageOcrPhotoRecognizeReceiptRequest) -> operations.ImageOcrPhotoRecognizeReceiptResponse:
        r"""Recognize a photo of a receipt, extract key business information
        Analyzes a photograph of a receipt as input, and outputs key business information such as the name of the business, the address of the business, the phone number of the business, the total of the receipt, the date of the receipt, and more.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ocr/photo/recognize/receipt"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ImageOcrPhotoRecognizeReceiptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReceiptRecognitionResult])
                res.receipt_recognition_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReceiptRecognitionResult])
                res.receipt_recognition_result = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def image_ocr_photo_to_text(self, request: operations.ImageOcrPhotoToTextRequest) -> operations.ImageOcrPhotoToTextResponse:
        r"""Convert a photo of a document into text
        Converts an uploaded photo of a document in common formats such as JPEG, PNG into text via Optical Character Recognition.  This API is intended to be run on photos of documents, e.g. taken with a smartphone and supports cases where other content, such as a desk, are in the frame and the camera is crooked.  If you want to OCR a scanned image, use the image/toText API call instead as it is designed for scanned images.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ocr/photo/toText"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ImageOcrPhotoToTextResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImageToTextResponse])
                res.image_to_text_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImageToTextResponse])
                res.image_to_text_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def image_ocr_photo_words_with_location(self, request: operations.ImageOcrPhotoWordsWithLocationRequest) -> operations.ImageOcrPhotoWordsWithLocationResponse:
        r"""Convert a photo of a document or receipt into words with location
        Converts a photo of a document or receipt in common formats such as JPEG, PNG into words/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on photographs of documents.  If you want to OCR scanned documents (e.g. taken with a scanner), be sure to use the image/toText API instead, as it is designed for that use case.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ocr/photo/to/words-with-location"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ImageOcrPhotoWordsWithLocationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PhotoToWordsWithLocationResult])
                res.photo_to_words_with_location_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PhotoToWordsWithLocationResult])
                res.photo_to_words_with_location_result = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def image_ocr_post(self, request: operations.ImageOcrPostRequest) -> operations.ImageOcrPostResponse:
        r"""Convert a scanned image into text
        Converts an uploaded image in common formats such as JPEG, PNG into text via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ocr/image/toText"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ImageOcrPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImageToTextResponse])
                res.image_to_text_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImageToTextResponse])
                res.image_to_text_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def pdf_ocr_pdf_to_lines_with_location(self, request: operations.PdfOcrPdfToLinesWithLocationRequest) -> operations.PdfOcrPdfToLinesWithLocationResponse:
        r"""Convert a PDF into text lines with location
        Converts a PDF into lines/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ocr/pdf/to/lines-with-location"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PdfOcrPdfToLinesWithLocationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PdfToLinesWithLocationResult])
                res.pdf_to_lines_with_location_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PdfToLinesWithLocationResult])
                res.pdf_to_lines_with_location_result = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def pdf_ocr_pdf_to_words_with_location(self, request: operations.PdfOcrPdfToWordsWithLocationRequest) -> operations.PdfOcrPdfToWordsWithLocationResponse:
        r"""Convert a PDF into words with location
        Converts a PDF into words/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ocr/pdf/to/words-with-location"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PdfOcrPdfToWordsWithLocationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PdfToWordsWithLocationResult])
                res.pdf_to_words_with_location_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PdfToWordsWithLocationResult])
                res.pdf_to_words_with_location_result = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def pdf_ocr_post(self, request: operations.PdfOcrPostRequest) -> operations.PdfOcrPostResponse:
        r"""Converts an uploaded PDF file into text via Optical Character Recognition.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ocr/pdf/toText"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PdfOcrPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PdfToTextResponse])
                res.pdf_to_text_response = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PdfToTextResponse])
                res.pdf_to_text_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def preprocessing_binarize(self, request: operations.PreprocessingBinarizeRequest) -> operations.PreprocessingBinarizeResponse:
        r"""Convert an image of text into a binarized (light and dark) view
        Perform an adaptive binarization algorithm on the input image to prepare it for further OCR operations.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ocr/preprocessing/image/binarize"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PreprocessingBinarizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.preprocessing_binarize_200_application_json_byte_string = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.preprocessing_binarize_200_application_xml_byte_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.preprocessing_binarize_200_text_json_byte_string = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.preprocessing_binarize_200_text_xml_byte_string = r.content

        return res

    
    def preprocessing_binarize_advanced(self, request: operations.PreprocessingBinarizeAdvancedRequest) -> operations.PreprocessingBinarizeAdvancedResponse:
        r"""Convert an image of text into a binary (light and dark) view with ML
        Perform an advanced adaptive, Deep Learning-based binarization algorithm on the input image to prepare it for further OCR operations.  Provides enhanced accuracy than adaptive binarization.  Image will be upsampled to 300 DPI if it has a DPI below 300.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ocr/preprocessing/image/binarize/advanced"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PreprocessingBinarizeAdvancedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.preprocessing_binarize_advanced_200_application_json_byte_string = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.preprocessing_binarize_advanced_200_application_xml_byte_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.preprocessing_binarize_advanced_200_text_json_byte_string = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.preprocessing_binarize_advanced_200_text_xml_byte_string = r.content

        return res

    
    def preprocessing_get_page_angle(self, request: operations.PreprocessingGetPageAngleRequest) -> operations.PreprocessingGetPageAngleResponse:
        r"""Get the angle of the page / document / receipt
        Analyzes a photo or image of a document and identifies the rotation angle of the page.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ocr/preprocessing/image/get-page-angle"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PreprocessingGetPageAngleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetPageAngleResult])
                res.get_page_angle_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetPageAngleResult])
                res.get_page_angle_result = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def preprocessing_unrotate(self, request: operations.PreprocessingUnrotateRequest) -> operations.PreprocessingUnrotateResponse:
        r"""Detect and unrotate a document image
        Detect and unrotate an image of a document (e.g. that was scanned at an angle).  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ocr/preprocessing/image/unrotate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PreprocessingUnrotateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.preprocessing_unrotate_200_application_json_byte_string = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.preprocessing_unrotate_200_application_xml_byte_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.preprocessing_unrotate_200_text_json_byte_string = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.preprocessing_unrotate_200_text_xml_byte_string = r.content

        return res

    
    def preprocessing_unrotate_advanced(self, request: operations.PreprocessingUnrotateAdvancedRequest) -> operations.PreprocessingUnrotateAdvancedResponse:
        r"""Detect and unrotate a document image (advanced)
        Detect and unrotate an image of a document (e.g. that was scanned at an angle) using deep learning.  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ocr/preprocessing/image/unrotate/advanced"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PreprocessingUnrotateAdvancedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.preprocessing_unrotate_advanced_200_application_json_byte_string = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.preprocessing_unrotate_advanced_200_application_xml_byte_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.preprocessing_unrotate_advanced_200_text_json_byte_string = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.preprocessing_unrotate_advanced_200_text_xml_byte_string = r.content

        return res

    
    def preprocessing_unskew(self, request: operations.PreprocessingUnskewRequest) -> operations.PreprocessingUnskewResponse:
        r"""Detect and unskew a photo of a document
        Detect and unskew a photo of a document (e.g. taken on a cell phone) into a perfectly square image.  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ocr/preprocessing/image/unskew"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PreprocessingUnskewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.preprocessing_unskew_200_application_json_byte_string = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.preprocessing_unskew_200_application_xml_byte_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.preprocessing_unskew_200_text_json_byte_string = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.preprocessing_unskew_200_text_xml_byte_string = r.content

        return res

    
    def receipts_photo_to_csv(self, request: operations.ReceiptsPhotoToCsvRequest) -> operations.ReceiptsPhotoToCsvResponse:
        r"""Convert a photo of a receipt into a CSV file containing structured information from the receipt
        Leverage Deep Learning to automatically turn a photo of a receipt into a CSV file containing the structured information from the receipt.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/ocr/receipts/photo/to/csv"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReceiptsPhotoToCsvResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.receipts_photo_to_csv_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.receipts_photo_to_csv_200_text_json_object = out

        return res

    