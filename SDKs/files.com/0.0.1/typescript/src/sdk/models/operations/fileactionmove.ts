import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FileActionMovePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class FileActionMoveRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=destination" })
  destination: string;
}


export class FileActionMoveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FileActionMovePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: FileActionMoveRequestBody;
}


export class FileActionMoveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fileActionEntity?: shared.FileActionEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
