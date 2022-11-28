import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsersMeSubscriptionsVideosQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=categoryOneOf" })
  categoryOneOf?: any;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: shared.FilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isLive" })
  isLive?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=languageOneOf" })
  languageOneOf?: any;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=licenceOneOf" })
  licenceOneOf?: any;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nsfw" })
  nsfw?: shared.NsfwEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=skipCount" })
  skipCount?: shared.SkipCountEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.VideosSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=tagsAllOf" })
  tagsAllOf?: any;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=tagsOneOf" })
  tagsOneOf?: any;
}


export class GetUsersMeSubscriptionsVideosSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetUsersMeSubscriptionsVideosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUsersMeSubscriptionsVideosQueryParams;

  @SpeakeasyMetadata()
  security: GetUsersMeSubscriptionsVideosSecurity;
}


export class GetUsersMeSubscriptionsVideosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  videoListResponse?: any;
}
