import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSaveOfferQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetSaveOfferSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class GetSaveOfferRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSaveOfferQueryParams;

  @Metadata()
  security: GetSaveOfferSecurity;
}


export class GetSaveOfferResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itvGetDiscountResponse?: shared.ItvGetDiscountResponse;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
