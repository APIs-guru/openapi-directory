import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetContinueWatchingListIncludeEnum {
    Episode = "episode",
    Season = "season",
    Show = "show"
}

export enum GetContinueWatchingListShowItemTypeEnum {
    Episode = "episode",
    Season = "season",
    Show = "show"
}


export class GetContinueWatchingListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device" })
  device?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=include" })
  include?: GetContinueWatchingListIncludeEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_rating" })
  maxRating?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=segments" })
  segments?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=show_item_type" })
  showItemType?: GetContinueWatchingListShowItemTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sub" })
  sub?: string;
}


export class GetContinueWatchingListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  profileAuth: shared.SchemeProfileAuth;
}


export class GetContinueWatchingListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetContinueWatchingListQueryParams;

  @SpeakeasyMetadata()
  security: GetContinueWatchingListSecurity;
}


export class GetContinueWatchingListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  itemList?: shared.ItemList;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
