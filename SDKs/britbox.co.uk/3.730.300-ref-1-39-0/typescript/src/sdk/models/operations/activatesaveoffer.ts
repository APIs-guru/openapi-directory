import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActivateSaveOfferQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class ActivateSaveOfferSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class ActivateSaveOfferRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ActivateSaveOfferQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: string;

  @SpeakeasyMetadata()
  security: ActivateSaveOfferSecurity;
}


export class ActivateSaveOfferResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
