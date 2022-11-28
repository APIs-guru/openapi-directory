import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateProfileWithIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class UpdateProfileWithIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class UpdateProfileWithIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class UpdateProfileWithIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateProfileWithIdPathParams;

  @SpeakeasyMetadata()
  queryParams: UpdateProfileWithIdQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ProfileUpdateRequest;

  @SpeakeasyMetadata()
  security: UpdateProfileWithIdSecurity;
}


export class UpdateProfileWithIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
