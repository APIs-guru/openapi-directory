import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BalanceLookupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;
}


export class BalanceLookupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: BalanceLookupQueryParams;
}


export class BalanceLookupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
