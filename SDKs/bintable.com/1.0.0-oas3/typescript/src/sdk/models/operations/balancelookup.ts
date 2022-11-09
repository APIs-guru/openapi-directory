import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BalanceLookupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;
}


export class BalanceLookupRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: BalanceLookupQueryParams;
}


export class BalanceLookupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
