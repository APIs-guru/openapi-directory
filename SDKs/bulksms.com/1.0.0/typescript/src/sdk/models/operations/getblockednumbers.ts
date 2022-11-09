import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBlockedNumbersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=min-id" })
  minId?: number;
}


export class GetBlockedNumbersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetBlockedNumbersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetBlockedNumbersQueryParams;

  @Metadata()
  security: GetBlockedNumbersSecurity;
}


export class GetBlockedNumbersResponse extends SpeakeasyBase {
  @Metadata()
  blockedNumber?: shared.BlockedNumber;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
