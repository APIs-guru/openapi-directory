import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ImageOcrImageLinesWithLocationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=language" })
  language?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=preprocessing" })
  preprocessing?: string;
}


export class ImageOcrImageLinesWithLocationRequestBodyImageFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class ImageOcrImageLinesWithLocationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  imageFile: ImageOcrImageLinesWithLocationRequestBodyImageFile;
}


export class ImageOcrImageLinesWithLocationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class ImageOcrImageLinesWithLocationRequest extends SpeakeasyBase {
  @Metadata()
  headers: ImageOcrImageLinesWithLocationHeaders;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: ImageOcrImageLinesWithLocationRequestBody;

  @Metadata()
  security: ImageOcrImageLinesWithLocationSecurity;
}


export class ImageOcrImageLinesWithLocationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  imageToLinesWithLocationResult?: shared.ImageToLinesWithLocationResult;

  @Metadata()
  statusCode: number;
}
