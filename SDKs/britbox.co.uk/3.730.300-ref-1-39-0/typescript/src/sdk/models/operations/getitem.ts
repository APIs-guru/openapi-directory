import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetItemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum GetItemExpandEnum {
    All = "all"
,    Children = "children"
,    Ancestors = "ancestors"
,    Parent = "parent"
}

export enum GetItemSelectSeasonEnum {
    First = "first"
,    Latest = "latest"
}


export class GetItemQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=device" })
  device?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: GetItemExpandEnum;

  @Metadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=max_rating" })
  maxRating?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=segments" })
  segments?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=select_season" })
  selectSeason?: GetItemSelectSeasonEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sub" })
  sub?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=use_custom_id" })
  useCustomId?: boolean;
}


export class GetItemRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetItemPathParams;

  @Metadata()
  queryParams: GetItemQueryParams;
}


export class GetItemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  itemDetail?: shared.ItemDetail;

  @Metadata()
  serviceError?: shared.ServiceError;

  @Metadata()
  statusCode: number;
}
