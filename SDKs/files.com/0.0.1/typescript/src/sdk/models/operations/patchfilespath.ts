import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchFilesPathPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class PatchFilesPathRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=priority_color" })
  priorityColor?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=provided_mtime" })
  providedMtime?: Date;
}


export class PatchFilesPathRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchFilesPathPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PatchFilesPathRequestBody;
}


export class PatchFilesPathResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fileEntity?: shared.FileEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
