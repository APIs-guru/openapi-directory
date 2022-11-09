import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostFilesPathPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class PostFilesPathRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=action" })
  action?: string;

  @Metadata({ data: "multipart_form, name=etags[etag]" })
  etagsEtag: string[];

  @Metadata({ data: "multipart_form, name=etags[part]" })
  etagsPart: number[];

  @Metadata({ data: "multipart_form, name=length" })
  length?: number;

  @Metadata({ data: "multipart_form, name=mkdir_parents" })
  mkdirParents?: boolean;

  @Metadata({ data: "multipart_form, name=part" })
  part?: number;

  @Metadata({ data: "multipart_form, name=parts" })
  parts?: number;

  @Metadata({ data: "multipart_form, name=provided_mtime" })
  providedMtime?: Date;

  @Metadata({ data: "multipart_form, name=ref" })
  ref?: string;

  @Metadata({ data: "multipart_form, name=restart" })
  restart?: number;

  @Metadata({ data: "multipart_form, name=size" })
  size?: number;

  @Metadata({ data: "multipart_form, name=structure" })
  structure?: string;

  @Metadata({ data: "multipart_form, name=with_rename" })
  withRename?: boolean;
}


export class PostFilesPathRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostFilesPathPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PostFilesPathRequestBody;
}


export class PostFilesPathResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fileEntity?: shared.FileEntity;

  @Metadata()
  statusCode: number;
}
