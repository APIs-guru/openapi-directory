import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ConfirmPurchaseStrongPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=platform" })
  platform: string;
}


export class ConfirmPurchaseStrongQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class ConfirmPurchaseStrongSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class ConfirmPurchaseStrongRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ConfirmPurchaseStrongPathParams;

  @Metadata()
  queryParams: ConfirmPurchaseStrongQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ItvPurchaseStrongRequest;

  @Metadata()
  security: ConfirmPurchaseStrongSecurity;
}


export class ConfirmPurchaseStrongResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itvPurchaseStrongResponse?: shared.ItvPurchaseStrongResponse;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
