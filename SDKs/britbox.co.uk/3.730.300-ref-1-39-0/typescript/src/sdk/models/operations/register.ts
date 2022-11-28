import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RegisterQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class RegisterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RegisterQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.RegistrationRequest;
}


export class RegisterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AccessToken })
  accessTokens?: shared.AccessToken[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
