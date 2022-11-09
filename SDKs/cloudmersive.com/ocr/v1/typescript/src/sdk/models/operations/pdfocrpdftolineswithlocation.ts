import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PdfOcrPdfToLinesWithLocationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=language" })
  language?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=preprocessing" })
  preprocessing?: string;
}


export class PdfOcrPdfToLinesWithLocationRequestBodyImageFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class PdfOcrPdfToLinesWithLocationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  imageFile: PdfOcrPdfToLinesWithLocationRequestBodyImageFile;
}


export class PdfOcrPdfToLinesWithLocationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class PdfOcrPdfToLinesWithLocationRequest extends SpeakeasyBase {
  @Metadata()
  headers: PdfOcrPdfToLinesWithLocationHeaders;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PdfOcrPdfToLinesWithLocationRequestBody;

  @Metadata()
  security: PdfOcrPdfToLinesWithLocationSecurity;
}


export class PdfOcrPdfToLinesWithLocationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  pdfToLinesWithLocationResult?: shared.PdfToLinesWithLocationResult;

  @Metadata()
  statusCode: number;
}
