import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FileCommentListForPathPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class FileCommentListForPathQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class FileCommentListForPathRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FileCommentListForPathPathParams;

  @Metadata()
  queryParams: FileCommentListForPathQueryParams;
}


export class FileCommentListForPathResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.FileCommentEntity })
  fileCommentEntities?: shared.FileCommentEntity[];

  @Metadata()
  statusCode: number;
}
