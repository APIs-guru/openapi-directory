import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetWatchedListOrderByEnum {
    DateAdded = "date-added",
    DateModified = "date-modified"
}


export class GetWatchedListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=completed" })
  completed?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device" })
  device?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=item_type" })
  itemType?: shared.ItemTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: shared.ListOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_by" })
  orderBy?: GetWatchedListOrderByEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=segments" })
  segments?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sub" })
  sub?: string;
}


export class GetWatchedListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  profileAuth: shared.SchemeProfileAuth;
}


export class GetWatchedListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetWatchedListQueryParams;

  @SpeakeasyMetadata()
  security: GetWatchedListSecurity;
}


export class GetWatchedListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  itemList?: shared.ItemList;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
