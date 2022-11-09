import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=device" })
  device?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=item_type" })
  itemType?: shared.ItemTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_rating" })
  maxRating?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: shared.ListOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order_by" })
  orderBy?: shared.ListOrderByEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=param" })
  param?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=segments" })
  segments?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=sub" })
  sub?: string;
}


export class GetListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetListPathParams;

  @Metadata()
  queryParams: GetListQueryParams;
}


export class GetListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itemList?: shared.ItemList;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
