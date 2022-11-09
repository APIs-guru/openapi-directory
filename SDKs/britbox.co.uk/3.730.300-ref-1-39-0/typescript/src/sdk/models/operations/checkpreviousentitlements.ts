import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CheckPreviousEntitlementsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class CheckPreviousEntitlementsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class CheckPreviousEntitlementsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CheckPreviousEntitlementsQueryParams;

  @Metadata()
  security: CheckPreviousEntitlementsSecurity;
}


export class CheckPreviousEntitlementsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itvHadEntitlement?: shared.ItvHadEntitlement;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
