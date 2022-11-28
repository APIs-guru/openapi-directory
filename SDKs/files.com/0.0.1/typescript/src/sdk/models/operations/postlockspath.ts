import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostLocksPathPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;
}


export class PostLocksPathRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=allow_access_by_any_user" })
  allowAccessByAnyUser?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=exclusive" })
  exclusive?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=recursive" })
  recursive?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=timeout" })
  timeout?: number;
}


export class PostLocksPathRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostLocksPathPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PostLocksPathRequestBody;
}


export class PostLocksPathResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  lockEntity?: shared.LockEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
