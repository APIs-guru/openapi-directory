import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetContinueWatchingListIncludeEnum {
    Episode = "episode"
,    Season = "season"
,    Show = "show"
}

export enum GetContinueWatchingListShowItemTypeEnum {
    Episode = "episode"
,    Season = "season"
,    Show = "show"
}


export class GetContinueWatchingListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=device" })
  device?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=false;name=include" })
  include?: GetContinueWatchingListIncludeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_rating" })
  maxRating?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=segments" })
  segments?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=show_item_type" })
  showItemType?: GetContinueWatchingListShowItemTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sub" })
  sub?: string;
}


export class GetContinueWatchingListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  profileAuth: shared.SchemeProfileAuth;
}


export class GetContinueWatchingListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetContinueWatchingListQueryParams;

  @Metadata()
  security: GetContinueWatchingListSecurity;
}


export class GetContinueWatchingListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itemList?: shared.ItemList;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
