import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetItemWatchedStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class GetItemWatchedStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetItemWatchedStatusSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  profileAuth: shared.SchemeProfileAuth;
}


export class GetItemWatchedStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetItemWatchedStatusPathParams;

  @Metadata()
  queryParams: GetItemWatchedStatusQueryParams;

  @Metadata()
  security: GetItemWatchedStatusSecurity;
}


export class GetItemWatchedStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;

  @Metadata()
  watched?: shared.Watched;
}
