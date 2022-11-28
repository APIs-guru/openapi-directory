import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum GetItemExpandEnum {
    All = "all",
    Children = "children",
    Ancestors = "ancestors",
    Parent = "parent"
}

export enum GetItemSelectSeasonEnum {
    First = "first",
    Latest = "latest"
}


export class GetItemQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=device" })
  device?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: GetItemExpandEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=ff" })
  ff?: shared.FeatureFlagsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" })
  lang?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_rating" })
  maxRating?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=segments" })
  segments?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=select_season" })
  selectSeason?: GetItemSelectSeasonEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sub" })
  sub?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=use_custom_id" })
  useCustomId?: boolean;
}


export class GetItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetItemPathParams;

  @SpeakeasyMetadata()
  queryParams: GetItemQueryParams;
}


export class GetItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  itemDetail?: shared.ItemDetail;

  @SpeakeasyMetadata()
  serviceError?: shared.ServiceError;

  @SpeakeasyMetadata()
  statusCode: number;
}
