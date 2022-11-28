import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ImageOcrPhotoWordsWithLocationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=diagnostics" })
  diagnostics?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=preprocessing" })
  preprocessing?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=recognitionMode" })
  recognitionMode?: string;
}


export class ImageOcrPhotoWordsWithLocationRequestBodyImageFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class ImageOcrPhotoWordsWithLocationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  imageFile: ImageOcrPhotoWordsWithLocationRequestBodyImageFile;
}


export class ImageOcrPhotoWordsWithLocationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class ImageOcrPhotoWordsWithLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ImageOcrPhotoWordsWithLocationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: ImageOcrPhotoWordsWithLocationRequestBody;

  @SpeakeasyMetadata()
  security: ImageOcrPhotoWordsWithLocationSecurity;
}


export class ImageOcrPhotoWordsWithLocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  photoToWordsWithLocationResult?: shared.PhotoToWordsWithLocationResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
