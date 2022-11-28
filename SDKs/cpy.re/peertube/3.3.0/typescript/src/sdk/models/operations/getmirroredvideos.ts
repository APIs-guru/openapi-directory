import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetMirroredVideosTargetEnum {
    MyVideos = "my-videos",
    RemoteVideos = "remote-videos"
}


export class GetMirroredVideosQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.VideoRedundanciesSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=target" })
  target: GetMirroredVideosTargetEnum;
}


export class GetMirroredVideosSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetMirroredVideosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMirroredVideosQueryParams;

  @SpeakeasyMetadata()
  security: GetMirroredVideosSecurity;
}


export class GetMirroredVideosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  videoRedundancies?: any[];
}
