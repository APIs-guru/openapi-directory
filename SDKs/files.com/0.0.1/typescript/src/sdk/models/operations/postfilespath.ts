import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostFilesPathPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class PostFilesPathRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=etags[etag]" })
  etagsEtag: string[];

  @SpeakeasyMetadata({ data: "multipart_form, name=etags[part]" })
  etagsPart: number[];

  @SpeakeasyMetadata({ data: "multipart_form, name=length" })
  length?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=mkdir_parents" })
  mkdirParents?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=part" })
  part?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=parts" })
  parts?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=provided_mtime" })
  providedMtime?: Date;

  @SpeakeasyMetadata({ data: "multipart_form, name=ref" })
  ref?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=restart" })
  restart?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=structure" })
  structure?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=with_rename" })
  withRename?: boolean;
}


export class PostFilesPathRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostFilesPathPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PostFilesPathRequestBody;
}


export class PostFilesPathResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fileEntity?: shared.FileEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
