import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ImageOcrImageLinesWithLocationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=preprocessing" })
  preprocessing?: string;
}


export class ImageOcrImageLinesWithLocationRequestBodyImageFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class ImageOcrImageLinesWithLocationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  imageFile: ImageOcrImageLinesWithLocationRequestBodyImageFile;
}


export class ImageOcrImageLinesWithLocationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class ImageOcrImageLinesWithLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ImageOcrImageLinesWithLocationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: ImageOcrImageLinesWithLocationRequestBody;

  @SpeakeasyMetadata()
  security: ImageOcrImageLinesWithLocationSecurity;
}


export class ImageOcrImageLinesWithLocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  imageToLinesWithLocationResult?: shared.ImageToLinesWithLocationResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
