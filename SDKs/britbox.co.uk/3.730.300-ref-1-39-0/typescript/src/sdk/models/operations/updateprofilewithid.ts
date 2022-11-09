import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateProfileWithIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateProfileWithIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class UpdateProfileWithIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class UpdateProfileWithIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateProfileWithIdPathParams;

  @Metadata()
  queryParams: UpdateProfileWithIdQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ProfileUpdateRequest;

  @Metadata()
  security: UpdateProfileWithIdSecurity;
}


export class UpdateProfileWithIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
