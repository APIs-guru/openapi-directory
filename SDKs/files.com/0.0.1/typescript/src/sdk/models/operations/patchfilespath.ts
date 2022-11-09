import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchFilesPathPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class PatchFilesPathRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=priority_color" })
  priorityColor?: string;

  @Metadata({ data: "multipart_form, name=provided_mtime" })
  providedMtime?: Date;
}


export class PatchFilesPathRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchFilesPathPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PatchFilesPathRequestBody;
}


export class PatchFilesPathResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fileEntity?: shared.FileEntity;

  @Metadata()
  statusCode: number;
}
