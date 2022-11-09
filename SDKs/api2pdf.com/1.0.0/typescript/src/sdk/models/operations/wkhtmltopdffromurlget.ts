import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class WkhtmltopdfFromUrlGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=output" })
  output?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=url" })
  url: string;
}


export class WkhtmltopdfFromUrlGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  queryApiKey: shared.SchemeQueryApiKey;
}


export class WkhtmltopdfFromUrlGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: WkhtmltopdfFromUrlGetQueryParams;

  @Metadata()
  security: WkhtmltopdfFromUrlGetSecurity;
}


export class WkhtmltopdfFromUrlGetResponse extends SpeakeasyBase {
  @Metadata()
  apiResponseFailure?: shared.ApiResponseFailure;

  @Metadata()
  apiResponseSuccess?: shared.ApiResponseSuccess;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  wkhtmltopdfFromUrlGet200ApplicationPdfBinaryString?: Uint8Array;
}
