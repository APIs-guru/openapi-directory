import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostLocksPathPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class PostLocksPathRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=allow_access_by_any_user" })
  allowAccessByAnyUser?: boolean;

  @Metadata({ data: "multipart_form, name=exclusive" })
  exclusive?: boolean;

  @Metadata({ data: "multipart_form, name=recursive" })
  recursive?: string;

  @Metadata({ data: "multipart_form, name=timeout" })
  timeout?: number;
}


export class PostLocksPathRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostLocksPathPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PostLocksPathRequestBody;
}


export class PostLocksPathResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  lockEntity?: shared.LockEntity;

  @Metadata()
  statusCode: number;
}
