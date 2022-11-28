import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PdfOcrPdfToWordsWithLocationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=preprocessing" })
  preprocessing?: string;
}


export class PdfOcrPdfToWordsWithLocationRequestBodyImageFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=imageFile" })
  imageFile: string;
}


export class PdfOcrPdfToWordsWithLocationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  imageFile: PdfOcrPdfToWordsWithLocationRequestBodyImageFile;
}


export class PdfOcrPdfToWordsWithLocationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class PdfOcrPdfToWordsWithLocationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PdfOcrPdfToWordsWithLocationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PdfOcrPdfToWordsWithLocationRequestBody;

  @SpeakeasyMetadata()
  security: PdfOcrPdfToWordsWithLocationSecurity;
}


export class PdfOcrPdfToWordsWithLocationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pdfToWordsWithLocationResult?: shared.PdfToWordsWithLocationResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
