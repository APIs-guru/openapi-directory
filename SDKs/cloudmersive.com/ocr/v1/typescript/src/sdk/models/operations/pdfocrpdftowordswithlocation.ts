import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PdfOcrPdfToWordsWithLocationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=language" })
  language?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=preprocessing" })
  preprocessing?: string;
}


export class PdfOcrPdfToWordsWithLocationRequestBodyImageFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class PdfOcrPdfToWordsWithLocationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  imageFile: PdfOcrPdfToWordsWithLocationRequestBodyImageFile;
}


export class PdfOcrPdfToWordsWithLocationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class PdfOcrPdfToWordsWithLocationRequest extends SpeakeasyBase {
  @Metadata()
  headers: PdfOcrPdfToWordsWithLocationHeaders;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PdfOcrPdfToWordsWithLocationRequestBody;

  @Metadata()
  security: PdfOcrPdfToWordsWithLocationSecurity;
}


export class PdfOcrPdfToWordsWithLocationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  pdfToWordsWithLocationResult?: shared.PdfToWordsWithLocationResult;

  @Metadata()
  statusCode: number;
}
