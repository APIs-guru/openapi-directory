import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FileActionMovePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class FileActionMoveRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=destination" })
  destination: string;
}


export class FileActionMoveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FileActionMovePathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: FileActionMoveRequestBody;
}


export class FileActionMoveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fileActionEntity?: shared.FileActionEntity;

  @Metadata()
  statusCode: number;
}
