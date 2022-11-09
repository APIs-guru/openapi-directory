import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PdfOcrPostHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=language" })
  language?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=preprocessing" })
  preprocessing?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=recognitionMode" })
  recognitionMode?: string;
}


export class PdfOcrPostRequestBodyImageFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class PdfOcrPostRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  imageFile: PdfOcrPostRequestBodyImageFile;
}


export class PdfOcrPostSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class PdfOcrPostRequest extends SpeakeasyBase {
  @Metadata()
  headers: PdfOcrPostHeaders;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PdfOcrPostRequestBody;

  @Metadata()
  security: PdfOcrPostSecurity;
}


export class PdfOcrPostResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  pdfToTextResponse?: shared.PdfToTextResponse;

  @Metadata()
  statusCode: number;
}
