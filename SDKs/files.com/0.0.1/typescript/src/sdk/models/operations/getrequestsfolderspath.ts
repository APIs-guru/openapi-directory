import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRequestsFoldersPathPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class GetRequestsFoldersPathQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mine" })
  mine?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort_by" })
  sortBy?: Map<string, any>;
}


export class GetRequestsFoldersPathRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRequestsFoldersPathPathParams;

  @SpeakeasyMetadata()
  queryParams: GetRequestsFoldersPathQueryParams;
}


export class GetRequestsFoldersPathResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.RequestEntity })
  requestEntities?: shared.RequestEntity[];

  @SpeakeasyMetadata()
  statusCode: number;
}
