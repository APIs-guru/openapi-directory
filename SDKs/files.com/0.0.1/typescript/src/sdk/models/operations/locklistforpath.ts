import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LockListForPathPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class LockListForPathQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=include_children" })
  includeChildren?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class LockListForPathRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LockListForPathPathParams;

  @Metadata()
  queryParams: LockListForPathQueryParams;
}


export class LockListForPathResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.LockEntity })
  lockEntities?: shared.LockEntity[];

  @Metadata()
  statusCode: number;
}
