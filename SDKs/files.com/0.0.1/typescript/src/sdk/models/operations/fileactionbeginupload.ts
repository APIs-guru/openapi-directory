import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FileActionBeginUploadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class FileActionBeginUploadRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=mkdir_parents" })
  mkdirParents?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=part" })
  part?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=parts" })
  parts?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=ref" })
  ref?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=restart" })
  restart?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=with_rename" })
  withRename?: boolean;
}


export class FileActionBeginUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FileActionBeginUploadPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: FileActionBeginUploadRequestBody;
}


export class FileActionBeginUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.FileUploadPartEntity })
  fileUploadPartEntities?: shared.FileUploadPartEntity[];

  @SpeakeasyMetadata()
  statusCode: number;
}
