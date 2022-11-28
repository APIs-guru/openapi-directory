import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSaveOfferQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetSaveOfferSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class GetSaveOfferRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSaveOfferQueryParams;

  @SpeakeasyMetadata()
  security: GetSaveOfferSecurity;
}


export class GetSaveOfferResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  itvGetDiscountResponse?: shared.ItvGetDiscountResponse;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
