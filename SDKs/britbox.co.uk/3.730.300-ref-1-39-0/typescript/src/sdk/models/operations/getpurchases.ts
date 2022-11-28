import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPurchasesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetPurchasesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class GetPurchasesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPurchasesQueryParams;

  @SpeakeasyMetadata()
  security: GetPurchasesSecurity;
}


export class GetPurchasesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Purchase })
  purchases?: shared.Purchase[];

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
