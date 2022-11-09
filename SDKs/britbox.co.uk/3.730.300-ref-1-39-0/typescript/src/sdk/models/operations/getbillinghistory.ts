import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBillingHistoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=platform" })
  platform: string;
}


export class GetBillingHistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetBillingHistorySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class GetBillingHistoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBillingHistoryPathParams;

  @Metadata()
  queryParams: GetBillingHistoryQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ItvBillingHistoryRequest;

  @Metadata()
  security: GetBillingHistorySecurity;
}


export class GetBillingHistoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itvBillingHistory?: shared.ItvBillingHistory;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
