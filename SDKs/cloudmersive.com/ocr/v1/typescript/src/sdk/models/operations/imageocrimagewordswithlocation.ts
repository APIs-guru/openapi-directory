import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ImageOcrImageWordsWithLocationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=preprocessing" })
  preprocessing?: string;
}


export class ImageOcrImageWordsWithLocationRequestBodyImageFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class ImageOcrImageWordsWithLocationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  imageFile: ImageOcrImageWordsWithLocationRequestBodyImageFile;
}


export class ImageOcrImageWordsWithLocationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class ImageOcrImageWordsWithLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ImageOcrImageWordsWithLocationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: ImageOcrImageWordsWithLocationRequestBody;

  @SpeakeasyMetadata()
  security: ImageOcrImageWordsWithLocationSecurity;
}


export class ImageOcrImageWordsWithLocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  imageToWordsWithLocationResult?: shared.ImageToWordsWithLocationResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
