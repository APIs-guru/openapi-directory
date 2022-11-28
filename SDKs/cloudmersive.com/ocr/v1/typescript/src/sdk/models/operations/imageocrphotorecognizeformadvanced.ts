import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ImageOcrPhotoRecognizeFormAdvancedHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=bucketID" })
  bucketId?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=bucketSecretKey" })
  bucketSecretKey?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=diagnostics" })
  diagnostics?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=preprocessing" })
  preprocessing?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=recognitionMode" })
  recognitionMode?: string;
}


export class ImageOcrPhotoRecognizeFormAdvancedRequestBodyImageFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class ImageOcrPhotoRecognizeFormAdvancedRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  imageFile: ImageOcrPhotoRecognizeFormAdvancedRequestBodyImageFile;
}


export class ImageOcrPhotoRecognizeFormAdvancedSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class ImageOcrPhotoRecognizeFormAdvancedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ImageOcrPhotoRecognizeFormAdvancedHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: ImageOcrPhotoRecognizeFormAdvancedRequestBody;

  @SpeakeasyMetadata()
  security: ImageOcrPhotoRecognizeFormAdvancedSecurity;
}


export class ImageOcrPhotoRecognizeFormAdvancedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  formRecognitionResult?: shared.FormRecognitionResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
