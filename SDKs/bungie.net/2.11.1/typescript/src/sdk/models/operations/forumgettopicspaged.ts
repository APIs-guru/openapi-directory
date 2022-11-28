import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ForumGetTopicsPagedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=categoryFilter" })
  categoryFilter: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group" })
  group: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pageSize" })
  pageSize: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=quickDate" })
  quickDate: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sort" })
  sort: number;
}


export class ForumGetTopicsPagedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locales" })
  locales?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagstring" })
  tagstring?: string;
}


export class ForumGetTopicsPagedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ForumGetTopicsPagedPathParams;

  @SpeakeasyMetadata()
  queryParams: ForumGetTopicsPagedQueryParams;
}


export class ForumGetTopicsPagedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
