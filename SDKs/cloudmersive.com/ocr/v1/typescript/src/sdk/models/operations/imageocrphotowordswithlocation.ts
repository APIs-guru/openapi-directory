import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ImageOcrPhotoWordsWithLocationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=diagnostics" })
  diagnostics?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=language" })
  language?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=preprocessing" })
  preprocessing?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=recognitionMode" })
  recognitionMode?: string;
}


export class ImageOcrPhotoWordsWithLocationRequestBodyImageFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class ImageOcrPhotoWordsWithLocationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  imageFile: ImageOcrPhotoWordsWithLocationRequestBodyImageFile;
}


export class ImageOcrPhotoWordsWithLocationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class ImageOcrPhotoWordsWithLocationRequest extends SpeakeasyBase {
  @Metadata()
  headers: ImageOcrPhotoWordsWithLocationHeaders;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: ImageOcrPhotoWordsWithLocationRequestBody;

  @Metadata()
  security: ImageOcrPhotoWordsWithLocationSecurity;
}


export class ImageOcrPhotoWordsWithLocationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  photoToWordsWithLocationResult?: shared.PhotoToWordsWithLocationResult;

  @Metadata()
  statusCode: number;
}
