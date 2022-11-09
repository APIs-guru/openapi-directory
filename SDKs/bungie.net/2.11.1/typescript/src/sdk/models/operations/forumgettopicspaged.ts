import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ForumGetTopicsPagedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=categoryFilter" })
  categoryFilter: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=group" })
  group: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=page" })
  page: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pageSize" })
  pageSize: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=quickDate" })
  quickDate: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=sort" })
  sort: number;
}


export class ForumGetTopicsPagedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=locales" })
  locales?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tagstring" })
  tagstring?: string;
}


export class ForumGetTopicsPagedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ForumGetTopicsPagedPathParams;

  @Metadata()
  queryParams: ForumGetTopicsPagedQueryParams;
}


export class ForumGetTopicsPagedResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
