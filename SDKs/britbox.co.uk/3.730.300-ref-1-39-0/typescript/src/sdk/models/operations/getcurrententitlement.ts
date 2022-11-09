import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCurrentEntitlementQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetCurrentEntitlementSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class GetCurrentEntitlementRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetCurrentEntitlementQueryParams;

  @Metadata()
  security: GetCurrentEntitlementSecurity;
}


export class GetCurrentEntitlementResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itvEntitlementCurrent?: shared.ItvEntitlementCurrent;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
