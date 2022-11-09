import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MakePurchaseQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class MakePurchaseSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class MakePurchaseRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: MakePurchaseQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PurchaseRequest;

  @Metadata()
  security: MakePurchaseSecurity;
}


export class MakePurchaseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  entitlement?: shared.Entitlement;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
