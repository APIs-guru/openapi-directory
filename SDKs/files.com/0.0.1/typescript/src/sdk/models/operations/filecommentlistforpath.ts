import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FileCommentListForPathPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class FileCommentListForPathQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class FileCommentListForPathRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FileCommentListForPathPathParams;

  @SpeakeasyMetadata()
  queryParams: FileCommentListForPathQueryParams;
}


export class FileCommentListForPathResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.FileCommentEntity })
  fileCommentEntities?: shared.FileCommentEntity[];

  @SpeakeasyMetadata()
  statusCode: number;
}
