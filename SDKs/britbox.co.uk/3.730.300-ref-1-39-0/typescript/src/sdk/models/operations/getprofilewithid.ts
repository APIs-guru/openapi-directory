import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProfileWithIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetProfileWithIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetProfileWithIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  accountAuth: shared.SchemeAccountAuth;
}


export class GetProfileWithIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProfileWithIdPathParams;

  @Metadata()
  queryParams: GetProfileWithIdQueryParams;

  @Metadata()
  security: GetProfileWithIdSecurity;
}


export class GetProfileWithIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  profileSummary?: shared.ProfileSummary;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
