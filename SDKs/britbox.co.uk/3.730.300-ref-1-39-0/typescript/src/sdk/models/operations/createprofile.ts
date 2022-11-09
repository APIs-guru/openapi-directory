import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateProfileQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class CreateProfileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class CreateProfileRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreateProfileQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ProfileCreationRequest;

  @Metadata()
  security: CreateProfileSecurity;
}


export class CreateProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  profileDetail?: shared.ProfileDetail;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
