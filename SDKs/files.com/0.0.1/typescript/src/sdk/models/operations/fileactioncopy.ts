import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FileActionCopyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class FileActionCopyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=destination" })
  destination: string;

  @Metadata({ data: "multipart_form, name=structure" })
  structure?: boolean;
}


export class FileActionCopyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FileActionCopyPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: FileActionCopyRequestBody;
}


export class FileActionCopyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fileActionEntity?: shared.FileActionEntity;

  @Metadata()
  statusCode: number;
}
