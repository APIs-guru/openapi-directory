import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEntitlementsHistoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetEntitlementsHistorySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class GetEntitlementsHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEntitlementsHistoryQueryParams;

  @SpeakeasyMetadata()
  security: GetEntitlementsHistorySecurity;
}


export class GetEntitlementsHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  itvEntitlementsHistory?: shared.ItvEntitlementsHistory;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
