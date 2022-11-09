import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SetItemWatchedStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=itemId" })
  itemId: string;
}


export class SetItemWatchedStatusQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=position" })
  position: number;
}


export class SetItemWatchedStatusSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  profileAuth: shared.SchemeProfileAuth;
}


export class SetItemWatchedStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetItemWatchedStatusPathParams;

  @Metadata()
  queryParams: SetItemWatchedStatusQueryParams;

  @Metadata()
  security: SetItemWatchedStatusSecurity;
}


export class SetItemWatchedStatusResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;

  @Metadata()
  watched?: shared.Watched;
}
