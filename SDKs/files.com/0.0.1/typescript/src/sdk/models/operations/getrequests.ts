import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRequestsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mine" })
  mine?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=path" })
  path?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: Map<string, any>;
}


export class GetRequestsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRequestsQueryParams;
}


export class GetRequestsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.RequestEntity })
  requestEntities?: shared.RequestEntity[];

  @Metadata()
  statusCode: number;
}
