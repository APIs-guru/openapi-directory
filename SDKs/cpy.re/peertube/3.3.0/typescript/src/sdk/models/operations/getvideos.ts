import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVideosQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=categoryOneOf" })
  categoryOneOf?: any;

  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: shared.FilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isLive" })
  isLive?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=false;name=languageOneOf" })
  languageOneOf?: any;

  @Metadata({ data: "queryParam, style=form;explode=false;name=licenceOneOf" })
  licenceOneOf?: any;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nsfw" })
  nsfw?: shared.NsfwEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=skipCount" })
  skipCount?: shared.SkipCountEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.VideosSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=tagsAllOf" })
  tagsAllOf?: any;

  @Metadata({ data: "queryParam, style=form;explode=false;name=tagsOneOf" })
  tagsOneOf?: any;
}


export class GetVideosRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetVideosQueryParams;
}


export class GetVideosResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  videoListResponse?: any;
}
