import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class WkhtmltopdfFromUrlGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=output" })
  output?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=url" })
  url: string;
}


export class WkhtmltopdfFromUrlGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  queryApiKey: shared.SchemeQueryApiKey;
}


export class WkhtmltopdfFromUrlGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: WkhtmltopdfFromUrlGetQueryParams;

  @SpeakeasyMetadata()
  security: WkhtmltopdfFromUrlGetSecurity;
}


export class WkhtmltopdfFromUrlGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiResponseFailure?: shared.ApiResponseFailure;

  @SpeakeasyMetadata()
  apiResponseSuccess?: shared.ApiResponseSuccess;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  wkhtmltopdfFromUrlGet200ApplicationPdfBinaryString?: Uint8Array;
}
