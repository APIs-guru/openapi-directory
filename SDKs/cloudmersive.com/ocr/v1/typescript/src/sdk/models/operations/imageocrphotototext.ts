import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ImageOcrPhotoToTextHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=language" })
  language?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=recognitionMode" })
  recognitionMode?: string;
}


export class ImageOcrPhotoToTextRequestBodyImageFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class ImageOcrPhotoToTextRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  imageFile: ImageOcrPhotoToTextRequestBodyImageFile;
}


export class ImageOcrPhotoToTextSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class ImageOcrPhotoToTextRequest extends SpeakeasyBase {
  @Metadata()
  headers: ImageOcrPhotoToTextHeaders;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: ImageOcrPhotoToTextRequestBody;

  @Metadata()
  security: ImageOcrPhotoToTextSecurity;
}


export class ImageOcrPhotoToTextResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  imageToTextResponse?: shared.ImageToTextResponse;

  @Metadata()
  statusCode: number;
}
