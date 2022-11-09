import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FileActionBeginUploadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class FileActionBeginUploadRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=mkdir_parents" })
  mkdirParents?: boolean;

  @Metadata({ data: "multipart_form, name=part" })
  part?: number;

  @Metadata({ data: "multipart_form, name=parts" })
  parts?: number;

  @Metadata({ data: "multipart_form, name=ref" })
  ref?: string;

  @Metadata({ data: "multipart_form, name=restart" })
  restart?: number;

  @Metadata({ data: "multipart_form, name=with_rename" })
  withRename?: boolean;
}


export class FileActionBeginUploadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FileActionBeginUploadPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: FileActionBeginUploadRequestBody;
}


export class FileActionBeginUploadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.FileUploadPartEntity })
  fileUploadPartEntities?: shared.FileUploadPartEntity[];

  @Metadata()
  statusCode: number;
}
