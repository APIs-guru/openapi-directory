import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RegisterQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class RegisterRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RegisterQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RegistrationRequest;
}


export class RegisterResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AccessToken })
  accessTokens?: shared.AccessToken[];

  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
