import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ImageOcrPhotoRecognizeReceiptHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=preprocessing" })
  preprocessing?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=recognitionMode" })
  recognitionMode?: string;
}


export class ImageOcrPhotoRecognizeReceiptRequestBodyImageFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class ImageOcrPhotoRecognizeReceiptRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  imageFile: ImageOcrPhotoRecognizeReceiptRequestBodyImageFile;
}


export class ImageOcrPhotoRecognizeReceiptSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class ImageOcrPhotoRecognizeReceiptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ImageOcrPhotoRecognizeReceiptHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: ImageOcrPhotoRecognizeReceiptRequestBody;

  @SpeakeasyMetadata()
  security: ImageOcrPhotoRecognizeReceiptSecurity;
}


export class ImageOcrPhotoRecognizeReceiptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  receiptRecognitionResult?: shared.ReceiptRecognitionResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
