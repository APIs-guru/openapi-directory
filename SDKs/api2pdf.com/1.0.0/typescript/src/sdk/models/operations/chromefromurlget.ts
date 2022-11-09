import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ChromeFromUrlGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=output" })
  output?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=url" })
  url: string;
}


export class ChromeFromUrlGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  queryApiKey: shared.SchemeQueryApiKey;
}


export class ChromeFromUrlGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ChromeFromUrlGetQueryParams;

  @Metadata()
  security: ChromeFromUrlGetSecurity;
}


export class ChromeFromUrlGetResponse extends SpeakeasyBase {
  @Metadata()
  apiResponseFailure?: shared.ApiResponseFailure;

  @Metadata()
  apiResponseSuccess?: shared.ApiResponseSuccess;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  chromeFromUrlGet200ApplicationPdfBinaryString?: Uint8Array;
}
