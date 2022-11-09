import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ForumGetCoreTopicsPagedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=categoryFilter" })
  categoryFilter: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=page" })
  page: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=quickDate" })
  quickDate: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=sort" })
  sort: number;
}


export class ForumGetCoreTopicsPagedQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=locales" })
  locales?: string;
}


export class ForumGetCoreTopicsPagedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ForumGetCoreTopicsPagedPathParams;

  @Metadata()
  queryParams: ForumGetCoreTopicsPagedQueryParams;
}


export class ForumGetCoreTopicsPagedResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
