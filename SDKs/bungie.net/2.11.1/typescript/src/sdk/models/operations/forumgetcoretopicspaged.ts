import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ForumGetCoreTopicsPagedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=categoryFilter" })
  categoryFilter: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=quickDate" })
  quickDate: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sort" })
  sort: number;
}


export class ForumGetCoreTopicsPagedQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locales" })
  locales?: string;
}


export class ForumGetCoreTopicsPagedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ForumGetCoreTopicsPagedPathParams;

  @SpeakeasyMetadata()
  queryParams: ForumGetCoreTopicsPagedQueryParams;
}


export class ForumGetCoreTopicsPagedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
