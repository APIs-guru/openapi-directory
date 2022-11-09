import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroupsGetDatapointsCountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum GroupsGetDatapointsCountStatusEnum {
    Deleted = "deleted"
,    Active = "active"
,    Paused = "paused"
,    Spam = "spam"
}

export enum GroupsGetDatapointsCountTypeEnum {
    Tp = "tp"
,    Tl = "tl"
}


export class GroupsGetDatapointsCountQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=createdAfter" })
  createdAfter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdBefore" })
  createdBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=onlyFavorites" })
  onlyFavorites?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GroupsGetDatapointsCountStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=textSearch" })
  textSearch?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: GroupsGetDatapointsCountTypeEnum;
}


export class GroupsGetDatapointsCountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupsGetDatapointsCountPathParams;

  @Metadata()
  queryParams: GroupsGetDatapointsCountQueryParams;
}


export class GroupsGetDatapointsCountResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreResponsesCountResponce?: shared.ApiCoreResponsesCountResponce;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
