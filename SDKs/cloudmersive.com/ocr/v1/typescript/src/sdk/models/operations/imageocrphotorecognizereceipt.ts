import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ImageOcrPhotoRecognizeReceiptHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=language" })
  language?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=preprocessing" })
  preprocessing?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=recognitionMode" })
  recognitionMode?: string;
}


export class ImageOcrPhotoRecognizeReceiptRequestBodyImageFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class ImageOcrPhotoRecognizeReceiptRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  imageFile: ImageOcrPhotoRecognizeReceiptRequestBodyImageFile;
}


export class ImageOcrPhotoRecognizeReceiptSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class ImageOcrPhotoRecognizeReceiptRequest extends SpeakeasyBase {
  @Metadata()
  headers: ImageOcrPhotoRecognizeReceiptHeaders;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: ImageOcrPhotoRecognizeReceiptRequestBody;

  @Metadata()
  security: ImageOcrPhotoRecognizeReceiptSecurity;
}


export class ImageOcrPhotoRecognizeReceiptResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  receiptRecognitionResult?: shared.ReceiptRecognitionResult;

  @Metadata()
  statusCode: number;
}
