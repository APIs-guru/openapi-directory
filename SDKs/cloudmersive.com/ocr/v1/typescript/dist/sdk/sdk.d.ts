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
     * Converts an uploaded image in common formats such as JPEG, PNG into lines/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.
    **/
    ImageOcrImageLinesWithLocation(req: operations.ImageOcrImageLinesWithLocationRequest, config?: AxiosRequestConfig): Promise<operations.ImageOcrImageLinesWithLocationResponse>;
    /**
     * Converts an uploaded image in common formats such as JPEG, PNG into words/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.
    **/
    ImageOcrImageWordsWithLocation(req: operations.ImageOcrImageWordsWithLocationRequest, config?: AxiosRequestConfig): Promise<operations.ImageOcrImageWordsWithLocationResponse>;
    /**
     * Analyzes a photograph of a business card as input, and outputs key business information such as the name of the person, name of the business, the address of the business, the phone number, the email address and more.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.
    **/
    ImageOcrPhotoRecognizeBusinessCard(req: operations.ImageOcrPhotoRecognizeBusinessCardRequest, config?: AxiosRequestConfig): Promise<operations.ImageOcrPhotoRecognizeBusinessCardResponse>;
    /**
     * Analyzes a photograph of a form as input, and outputs key business fields and information.  Customzie data to be extracted by defining fields for the form.  Uses template definitions stored in Cloudmersive Configuration; to configure stored templates in a configuration bucket, log into Cloudmersive Management Portal and navigate to Settings &gt; API Configuration &gt; Create Bucket.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.
    **/
    ImageOcrPhotoRecognizeFormAdvanced(req: operations.ImageOcrPhotoRecognizeFormAdvancedRequest, config?: AxiosRequestConfig): Promise<operations.ImageOcrPhotoRecognizeFormAdvancedResponse>;
    /**
     * Analyzes a photograph of a receipt as input, and outputs key business information such as the name of the business, the address of the business, the phone number of the business, the total of the receipt, the date of the receipt, and more.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.
    **/
    ImageOcrPhotoRecognizeReceipt(req: operations.ImageOcrPhotoRecognizeReceiptRequest, config?: AxiosRequestConfig): Promise<operations.ImageOcrPhotoRecognizeReceiptResponse>;
    /**
     * Converts an uploaded photo of a document in common formats such as JPEG, PNG into text via Optical Character Recognition.  This API is intended to be run on photos of documents, e.g. taken with a smartphone and supports cases where other content, such as a desk, are in the frame and the camera is crooked.  If you want to OCR a scanned image, use the image/toText API call instead as it is designed for scanned images.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.
    **/
    ImageOcrPhotoToText(req: operations.ImageOcrPhotoToTextRequest, config?: AxiosRequestConfig): Promise<operations.ImageOcrPhotoToTextResponse>;
    /**
     * Converts a photo of a document or receipt in common formats such as JPEG, PNG into words/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on photographs of documents.  If you want to OCR scanned documents (e.g. taken with a scanner), be sure to use the image/toText API instead, as it is designed for that use case.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.
    **/
    ImageOcrPhotoWordsWithLocation(req: operations.ImageOcrPhotoWordsWithLocationRequest, config?: AxiosRequestConfig): Promise<operations.ImageOcrPhotoWordsWithLocationResponse>;
    /**
     * Converts an uploaded image in common formats such as JPEG, PNG into text via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.  Note: for free tier API keys, it is required to add a credit card to your account for security reasons, to use the free tier key with this API.
    **/
    ImageOcrPost(req: operations.ImageOcrPostRequest, config?: AxiosRequestConfig): Promise<operations.ImageOcrPostResponse>;
    /**
     * Converts a PDF into lines/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.
    **/
    PdfOcrPdfToLinesWithLocation(req: operations.PdfOcrPdfToLinesWithLocationRequest, config?: AxiosRequestConfig): Promise<operations.PdfOcrPdfToLinesWithLocationResponse>;
    /**
     * Converts a PDF into words/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.
    **/
    PdfOcrPdfToWordsWithLocation(req: operations.PdfOcrPdfToWordsWithLocationRequest, config?: AxiosRequestConfig): Promise<operations.PdfOcrPdfToWordsWithLocationResponse>;
    PdfOcrPost(req: operations.PdfOcrPostRequest, config?: AxiosRequestConfig): Promise<operations.PdfOcrPostResponse>;
    /**
     * Perform an adaptive binarization algorithm on the input image to prepare it for further OCR operations.
    **/
    PreprocessingBinarize(req: operations.PreprocessingBinarizeRequest, config?: AxiosRequestConfig): Promise<operations.PreprocessingBinarizeResponse>;
    /**
     * Perform an advanced adaptive, Deep Learning-based binarization algorithm on the input image to prepare it for further OCR operations.  Provides enhanced accuracy than adaptive binarization.  Image will be upsampled to 300 DPI if it has a DPI below 300.
    **/
    PreprocessingBinarizeAdvanced(req: operations.PreprocessingBinarizeAdvancedRequest, config?: AxiosRequestConfig): Promise<operations.PreprocessingBinarizeAdvancedResponse>;
    /**
     * Analyzes a photo or image of a document and identifies the rotation angle of the page.
    **/
    PreprocessingGetPageAngle(req: operations.PreprocessingGetPageAngleRequest, config?: AxiosRequestConfig): Promise<operations.PreprocessingGetPageAngleResponse>;
    /**
     * Detect and unrotate an image of a document (e.g. that was scanned at an angle).  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.
    **/
    PreprocessingUnrotate(req: operations.PreprocessingUnrotateRequest, config?: AxiosRequestConfig): Promise<operations.PreprocessingUnrotateResponse>;
    /**
     * Detect and unrotate an image of a document (e.g. that was scanned at an angle) using deep learning.  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.
    **/
    PreprocessingUnrotateAdvanced(req: operations.PreprocessingUnrotateAdvancedRequest, config?: AxiosRequestConfig): Promise<operations.PreprocessingUnrotateAdvancedResponse>;
    /**
     * Detect and unskew a photo of a document (e.g. taken on a cell phone) into a perfectly square image.  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.
    **/
    PreprocessingUnskew(req: operations.PreprocessingUnskewRequest, config?: AxiosRequestConfig): Promise<operations.PreprocessingUnskewResponse>;
    /**
     * Leverage Deep Learning to automatically turn a photo of a receipt into a CSV file containing the structured information from the receipt.
    **/
    ReceiptsPhotoToCsv(req: operations.ReceiptsPhotoToCsvRequest, config?: AxiosRequestConfig): Promise<operations.ReceiptsPhotoToCsvResponse>;
}
export {};
