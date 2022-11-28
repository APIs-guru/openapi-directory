import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LockListForPathPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class LockListForPathQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_children" })
  includeChildren?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class LockListForPathRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LockListForPathPathParams;

  @SpeakeasyMetadata()
  queryParams: LockListForPathQueryParams;
}


export class LockListForPathResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.LockEntity })
  lockEntities?: shared.LockEntity[];

  @SpeakeasyMetadata()
  statusCode: number;
}
