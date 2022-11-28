import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PdfOcrPostHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=preprocessing" })
  preprocessing?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=recognitionMode" })
  recognitionMode?: string;
}


export class PdfOcrPostRequestBodyImageFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class PdfOcrPostRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  imageFile: PdfOcrPostRequestBodyImageFile;
}


export class PdfOcrPostSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class PdfOcrPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PdfOcrPostHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PdfOcrPostRequestBody;

  @SpeakeasyMetadata()
  security: PdfOcrPostSecurity;
}


export class PdfOcrPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pdfToTextResponse?: shared.PdfToTextResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
