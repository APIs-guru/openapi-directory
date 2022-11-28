import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PdfOcrPdfToLinesWithLocationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=preprocessing" })
  preprocessing?: string;
}


export class PdfOcrPdfToLinesWithLocationRequestBodyImageFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class PdfOcrPdfToLinesWithLocationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  imageFile: PdfOcrPdfToLinesWithLocationRequestBodyImageFile;
}


export class PdfOcrPdfToLinesWithLocationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class PdfOcrPdfToLinesWithLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PdfOcrPdfToLinesWithLocationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PdfOcrPdfToLinesWithLocationRequestBody;

  @SpeakeasyMetadata()
  security: PdfOcrPdfToLinesWithLocationSecurity;
}


export class PdfOcrPdfToLinesWithLocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pdfToLinesWithLocationResult?: shared.PdfToLinesWithLocationResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
