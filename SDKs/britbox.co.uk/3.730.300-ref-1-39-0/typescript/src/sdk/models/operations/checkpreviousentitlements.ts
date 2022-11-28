import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CheckPreviousEntitlementsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class CheckPreviousEntitlementsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class CheckPreviousEntitlementsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CheckPreviousEntitlementsQueryParams;

  @SpeakeasyMetadata()
  security: CheckPreviousEntitlementsSecurity;
}


export class CheckPreviousEntitlementsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  itvHadEntitlement?: shared.ItvHadEntitlement;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
