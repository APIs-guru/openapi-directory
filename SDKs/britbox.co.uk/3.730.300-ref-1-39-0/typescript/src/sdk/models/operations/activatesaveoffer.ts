import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActivateSaveOfferQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class ActivateSaveOfferSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class ActivateSaveOfferRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ActivateSaveOfferQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: string;

  @Metadata()
  security: ActivateSaveOfferSecurity;
}


export class ActivateSaveOfferResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
