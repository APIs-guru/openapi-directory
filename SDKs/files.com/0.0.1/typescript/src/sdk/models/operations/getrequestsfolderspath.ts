import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRequestsFoldersPathPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class GetRequestsFoldersPathQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=mine" })
  mine?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: Map<string, any>;
}


export class GetRequestsFoldersPathRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRequestsFoldersPathPathParams;

  @Metadata()
  queryParams: GetRequestsFoldersPathQueryParams;
}


export class GetRequestsFoldersPathResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.RequestEntity })
  requestEntities?: shared.RequestEntity[];

  @Metadata()
  statusCode: number;
}
