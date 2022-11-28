import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GroupsGetDatapointsCountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum GroupsGetDatapointsCountStatusEnum {
    Deleted = "deleted",
    Active = "active",
    Paused = "paused",
    Spam = "spam"
}

export enum GroupsGetDatapointsCountTypeEnum {
    Tp = "tp",
    Tl = "tl"
}


export class GroupsGetDatapointsCountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAfter" })
  createdAfter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdBefore" })
  createdBefore?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=onlyFavorites" })
  onlyFavorites?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GroupsGetDatapointsCountStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=textSearch" })
  textSearch?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GroupsGetDatapointsCountTypeEnum;
}


export class GroupsGetDatapointsCountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupsGetDatapointsCountPathParams;

  @SpeakeasyMetadata()
  queryParams: GroupsGetDatapointsCountQueryParams;
}


export class GroupsGetDatapointsCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreResponsesCountResponce?: shared.ApiCoreResponsesCountResponce;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
