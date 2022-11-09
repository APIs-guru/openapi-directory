import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWatchedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;
}


export class GetWatchedSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  profileAuth: shared.SchemeProfileAuth;
}


export class GetWatchedRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetWatchedQueryParams;

  @Metadata()
  security: GetWatchedSecurity;
}


export class GetWatchedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Watched })
  getWatched200ApplicationJsonObject?: Map<string, shared.Watched>;
}
