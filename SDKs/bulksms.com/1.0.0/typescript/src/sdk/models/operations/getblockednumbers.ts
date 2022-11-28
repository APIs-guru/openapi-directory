import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBlockedNumbersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min-id" })
  minId?: number;
}


export class GetBlockedNumbersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetBlockedNumbersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetBlockedNumbersQueryParams;

  @SpeakeasyMetadata()
  security: GetBlockedNumbersSecurity;
}


export class GetBlockedNumbersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  blockedNumber?: shared.BlockedNumber;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
