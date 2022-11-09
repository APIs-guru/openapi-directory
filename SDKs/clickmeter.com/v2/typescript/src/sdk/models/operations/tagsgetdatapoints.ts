import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TagsGetDatapointsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: number;
}

export enum TagsGetDatapointsStatusEnum {
    Deleted = "deleted"
,    Active = "active"
,    Paused = "paused"
,    Spam = "spam"
}

export enum TagsGetDatapointsTypeEnum {
    Tp = "tp"
,    Tl = "tl"
}


export class TagsGetDatapointsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=createdAfter" })
  createdAfter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdBefore" })
  createdBefore?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: TagsGetDatapointsStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=textSearch" })
  textSearch?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: TagsGetDatapointsTypeEnum;
}


export class TagsGetDatapointsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TagsGetDatapointsPathParams;

  @Metadata()
  queryParams: TagsGetDatapointsQueryParams;
}


export class TagsGetDatapointsResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
