import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEntitlementsHistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetEntitlementsHistorySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class GetEntitlementsHistoryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetEntitlementsHistoryQueryParams;

  @Metadata()
  security: GetEntitlementsHistorySecurity;
}


export class GetEntitlementsHistoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itvEntitlementsHistory?: shared.ItvEntitlementsHistory;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
