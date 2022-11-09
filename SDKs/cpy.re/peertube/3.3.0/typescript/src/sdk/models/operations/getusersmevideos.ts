import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersMeVideosQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class GetUsersMeVideosSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetUsersMeVideosRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUsersMeVideosQueryParams;

  @Metadata()
  security: GetUsersMeVideosSecurity;
}


export class GetUsersMeVideosResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  videoListResponse?: any;
}
