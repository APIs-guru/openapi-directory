import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.cloudmersive.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * imageOcrImageLinesWithLocation - Convert a scanned image into words with location
     *
     * Converts an uploaded image in common formats such as JPEG, PNG into lines/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.
    **/
    imageOcrImageLinesWithLocation(req: operations.ImageOcrImageLinesWithLocationRequest, config?: AxiosRequestConfig): Promise<operations.ImageOcrImageLinesWithLocationResponse>;
    /**
     * imageOcrImageWordsWithLocation - Convert a scanned image into words with location
     *
     * Converts an uploaded image in common formats such as JPEG, PNG into words/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.
    **/
    imageOcrImageWordsWithLocation(req: operations.ImageOcrImageWordsWithLocationRequest, config?: AxiosRequestConfig): Promise<operations.ImageOcrImageWordsWithLocationResponse>;
    /**
     * imageOcrPhotoRecognizeBusinessCard - Recognize a photo of a business card, extract key business information
     *
     * Analyzes a photograph of a business card as input, and outputs key business information such as the name of the person, name of the business, the address of the business, the phone number, the email address and more.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.
    **/
    imageOcrPhotoRecognizeBusinessCard(req: operations.ImageOcrPhotoRecognizeBusinessCardRequest, config?: AxiosRequestConfig): Promise<operations.ImageOcrPhotoRecognizeBusinessCardResponse>;
    /**
     * imageOcrPhotoRecognizeFormAdvanced - Recognize a photo of a form, extract key fields using stored templates
     *
     * Analyzes a photograph of a form as input, and outputs key business fields and information.  Customzie data to be extracted by defining fields for the form.  Uses template definitions stored in Cloudmersive Configuration; to configure stored templates in a configuration bucket, log into Cloudmersive Management Portal and navigate to Settings &gt; API Configuration &gt; Create Bucket.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.
    **/
    imageOcrPhotoRecognizeFormAdvanced(req: operations.ImageOcrPhotoRecognizeFormAdvancedRequest, config?: AxiosRequestConfig): Promise<operations.ImageOcrPhotoRecognizeFormAdvancedResponse>;
    /**
     * imageOcrPhotoRecognizeReceipt - Recognize a photo of a receipt, extract key business information
     *
     * Analyzes a photograph of a receipt as input, and outputs key business information such as the name of the business, the address of the business, the phone number of the business, the total of the receipt, the date of the receipt, and more.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.
    **/
    imageOcrPhotoRecognizeReceipt(req: operations.ImageOcrPhotoRecognizeReceiptRequest, config?: AxiosRequestConfig): Promise<operations.ImageOcrPhotoRecognizeReceiptResponse>;
    /**
     * imageOcrPhotoToText - Convert a photo of a document into text
     *
     * Converts an uploaded photo of a document in common formats such as JPEG, PNG into text via Optical Character Recognition.  This API is intended to be run on photos of documents, e.g. taken with a smartphone and supports cases where other content, such as a desk, are in the frame and the camera is crooked.  If you want to OCR a scanned image, use the image/toText API call instead as it is designed for scanned images.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.
    **/
    imageOcrPhotoToText(req: operations.ImageOcrPhotoToTextRequest, config?: AxiosRequestConfig): Promise<operations.ImageOcrPhotoToTextResponse>;
    /**
     * imageOcrPhotoWordsWithLocation - Convert a photo of a document or receipt into words with location
     *
     * Converts a photo of a document or receipt in common formats such as JPEG, PNG into words/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on photographs of documents.  If you want to OCR scanned documents (e.g. taken with a scanner), be sure to use the image/toText API instead, as it is designed for that use case.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.
    **/
    imageOcrPhotoWordsWithLocation(req: operations.ImageOcrPhotoWordsWithLocationRequest, config?: AxiosRequestConfig): Promise<operations.ImageOcrPhotoWordsWithLocationResponse>;
    /**
     * imageOcrPost - Convert a scanned image into text
     *
     * Converts an uploaded image in common formats such as JPEG, PNG into text via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.
    **/
    imageOcrPost(req: operations.ImageOcrPostRequest, config?: AxiosRequestConfig): Promise<operations.ImageOcrPostResponse>;
    /**
     * pdfOcrPdfToLinesWithLocation - Convert a PDF into text lines with location
     *
     * Converts a PDF into lines/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.
    **/
    pdfOcrPdfToLinesWithLocation(req: operations.PdfOcrPdfToLinesWithLocationRequest, config?: AxiosRequestConfig): Promise<operations.PdfOcrPdfToLinesWithLocationResponse>;
    /**
     * pdfOcrPdfToWordsWithLocation - Convert a PDF into words with location
     *
     * Converts a PDF into words/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.
    **/
    pdfOcrPdfToWordsWithLocation(req: operations.PdfOcrPdfToWordsWithLocationRequest, config?: AxiosRequestConfig): Promise<operations.PdfOcrPdfToWordsWithLocationResponse>;
    /**
     * pdfOcrPost - Converts an uploaded PDF file into text via Optical Character Recognition.
    **/
    pdfOcrPost(req: operations.PdfOcrPostRequest, config?: AxiosRequestConfig): Promise<operations.PdfOcrPostResponse>;
    /**
     * preprocessingBinarize - Convert an image of text into a binarized (light and dark) view
     *
     * Perform an adaptive binarization algorithm on the input image to prepare it for further OCR operations.
    **/
    preprocessingBinarize(req: operations.PreprocessingBinarizeRequest, config?: AxiosRequestConfig): Promise<operations.PreprocessingBinarizeResponse>;
    /**
     * preprocessingBinarizeAdvanced - Convert an image of text into a binary (light and dark) view with ML
     *
     * Perform an advanced adaptive, Deep Learning-based binarization algorithm on the input image to prepare it for further OCR operations.  Provides enhanced accuracy than adaptive binarization.  Image will be upsampled to 300 DPI if it has a DPI below 300.
    **/
    preprocessingBinarizeAdvanced(req: operations.PreprocessingBinarizeAdvancedRequest, config?: AxiosRequestConfig): Promise<operations.PreprocessingBinarizeAdvancedResponse>;
    /**
     * preprocessingGetPageAngle - Get the angle of the page / document / receipt
     *
     * Analyzes a photo or image of a document and identifies the rotation angle of the page.
    **/
    preprocessingGetPageAngle(req: operations.PreprocessingGetPageAngleRequest, config?: AxiosRequestConfig): Promise<operations.PreprocessingGetPageAngleResponse>;
    /**
     * preprocessingUnrotate - Detect and unrotate a document image
     *
     * Detect and unrotate an image of a document (e.g. that was scanned at an angle).  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.
    **/
    preprocessingUnrotate(req: operations.PreprocessingUnrotateRequest, config?: AxiosRequestConfig): Promise<operations.PreprocessingUnrotateResponse>;
    /**
     * preprocessingUnrotateAdvanced - Detect and unrotate a document image (advanced)
     *
     * Detect and unrotate an image of a document (e.g. that was scanned at an angle) using deep learning.  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.
    **/
    preprocessingUnrotateAdvanced(req: operations.PreprocessingUnrotateAdvancedRequest, config?: AxiosRequestConfig): Promise<operations.PreprocessingUnrotateAdvancedResponse>;
    /**
     * preprocessingUnskew - Detect and unskew a photo of a document
     *
     * Detect and unskew a photo of a document (e.g. taken on a cell phone) into a perfectly square image.  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.
    **/
    preprocessingUnskew(req: operations.PreprocessingUnskewRequest, config?: AxiosRequestConfig): Promise<operations.PreprocessingUnskewResponse>;
    /**
     * receiptsPhotoToCsv - Convert a photo of a receipt into a CSV file containing structured information from the receipt
     *
     * Leverage Deep Learning to automatically turn a photo of a receipt into a CSV file containing the structured information from the receipt.
    **/
    receiptsPhotoToCsv(req: operations.ReceiptsPhotoToCsvRequest, config?: AxiosRequestConfig): Promise<operations.ReceiptsPhotoToCsvResponse>;
}
export {};
