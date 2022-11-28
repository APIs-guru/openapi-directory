import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ImageOcrPostHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=preprocessing" })
  preprocessing?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=recognitionMode" })
  recognitionMode?: string;
}


export class ImageOcrPostRequestBodyImageFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class ImageOcrPostRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  imageFile: ImageOcrPostRequestBodyImageFile;
}


export class ImageOcrPostSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class ImageOcrPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: ImageOcrPostHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: ImageOcrPostRequestBody;

  @SpeakeasyMetadata()
  security: ImageOcrPostSecurity;
}


export class ImageOcrPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  imageToTextResponse?: shared.ImageToTextResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
