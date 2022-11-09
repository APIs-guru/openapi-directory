import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ImageOcrImageWordsWithLocationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=language" })
  language?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=preprocessing" })
  preprocessing?: string;
}


export class ImageOcrImageWordsWithLocationRequestBodyImageFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class ImageOcrImageWordsWithLocationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  imageFile: ImageOcrImageWordsWithLocationRequestBodyImageFile;
}


export class ImageOcrImageWordsWithLocationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class ImageOcrImageWordsWithLocationRequest extends SpeakeasyBase {
  @Metadata()
  headers: ImageOcrImageWordsWithLocationHeaders;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: ImageOcrImageWordsWithLocationRequestBody;

  @Metadata()
  security: ImageOcrImageWordsWithLocationSecurity;
}


export class ImageOcrImageWordsWithLocationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  imageToWordsWithLocationResult?: shared.ImageToWordsWithLocationResult;

  @Metadata()
  statusCode: number;
}
