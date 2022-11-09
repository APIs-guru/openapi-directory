import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ImageOcrPhotoRecognizeFormAdvancedHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=bucketID" })
  bucketId?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=bucketSecretKey" })
  bucketSecretKey?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=diagnostics" })
  diagnostics?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=preprocessing" })
  preprocessing?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=recognitionMode" })
  recognitionMode?: string;
}


export class ImageOcrPhotoRecognizeFormAdvancedRequestBodyImageFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class ImageOcrPhotoRecognizeFormAdvancedRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  imageFile: ImageOcrPhotoRecognizeFormAdvancedRequestBodyImageFile;
}


export class ImageOcrPhotoRecognizeFormAdvancedSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class ImageOcrPhotoRecognizeFormAdvancedRequest extends SpeakeasyBase {
  @Metadata()
  headers: ImageOcrPhotoRecognizeFormAdvancedHeaders;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: ImageOcrPhotoRecognizeFormAdvancedRequestBody;

  @Metadata()
  security: ImageOcrPhotoRecognizeFormAdvancedSecurity;
}


export class ImageOcrPhotoRecognizeFormAdvancedResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  formRecognitionResult?: shared.FormRecognitionResult;

  @Metadata()
  statusCode: number;
}
