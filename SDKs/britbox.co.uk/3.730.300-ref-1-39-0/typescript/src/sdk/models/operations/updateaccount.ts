import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateAccountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class UpdateAccountSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class UpdateAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UpdateAccountQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AccountUpdateRequest;

  @SpeakeasyMetadata()
  security: UpdateAccountSecurity;
}


export class UpdateAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
