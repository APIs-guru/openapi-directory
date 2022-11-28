import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FileActionCopyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class FileActionCopyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=destination" })
  destination: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=structure" })
  structure?: boolean;
}


export class FileActionCopyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FileActionCopyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: FileActionCopyRequestBody;
}


export class FileActionCopyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fileActionEntity?: shared.FileActionEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
