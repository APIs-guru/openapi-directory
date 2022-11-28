import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MakePurchaseQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class MakePurchaseSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class MakePurchaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: MakePurchaseQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PurchaseRequest;

  @SpeakeasyMetadata()
  security: MakePurchaseSecurity;
}


export class MakePurchaseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  entitlement?: shared.Entitlement;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
