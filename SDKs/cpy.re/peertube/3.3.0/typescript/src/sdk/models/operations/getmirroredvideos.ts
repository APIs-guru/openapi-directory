import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetMirroredVideosTargetEnum {
    MyVideos = "my-videos"
,    RemoteVideos = "remote-videos"
}


export class GetMirroredVideosQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.VideoRedundanciesSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=target" })
  target: GetMirroredVideosTargetEnum;
}


export class GetMirroredVideosSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetMirroredVideosRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetMirroredVideosQueryParams;

  @Metadata()
  security: GetMirroredVideosSecurity;
}


export class GetMirroredVideosResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  videoRedundancies?: any[];
}
