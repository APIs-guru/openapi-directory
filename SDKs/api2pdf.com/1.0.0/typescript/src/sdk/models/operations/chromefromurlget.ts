import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChromeFromUrlGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=output" })
  output?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=url" })
  url: string;
}


export class ChromeFromUrlGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  queryApiKey: shared.SchemeQueryApiKey;
}


export class ChromeFromUrlGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ChromeFromUrlGetQueryParams;

  @SpeakeasyMetadata()
  security: ChromeFromUrlGetSecurity;
}


export class ChromeFromUrlGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiResponseFailure?: shared.ApiResponseFailure;

  @SpeakeasyMetadata()
  apiResponseSuccess?: shared.ApiResponseSuccess;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  chromeFromUrlGet200ApplicationPdfBinaryString?: Uint8Array;
}
