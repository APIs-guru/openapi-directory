import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ImageOcrPostHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=language" })
  language?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=preprocessing" })
  preprocessing?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=recognitionMode" })
  recognitionMode?: string;
}


export class ImageOcrPostRequestBodyImageFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class ImageOcrPostRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  imageFile: ImageOcrPostRequestBodyImageFile;
}


export class ImageOcrPostSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class ImageOcrPostRequest extends SpeakeasyBase {
  @Metadata()
  headers: ImageOcrPostHeaders;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: ImageOcrPostRequestBody;

  @Metadata()
  security: ImageOcrPostSecurity;
}


export class ImageOcrPostResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  imageToTextResponse?: shared.ImageToTextResponse;

  @Metadata()
  statusCode: number;
}
