import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposDeleteFilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


// ReposDeleteFileRequestBodyAuthor
/** 
 * object containing information about the author.
**/
export class ReposDeleteFileRequestBodyAuthor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// ReposDeleteFileRequestBodyCommitter
/** 
 * object containing information about the committer.
**/
export class ReposDeleteFileRequestBodyCommitter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class ReposDeleteFileRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: ReposDeleteFileRequestBodyAuthor;

  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=committer" })
  committer?: ReposDeleteFileRequestBodyCommitter;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha: string;
}


export class ReposDeleteFile503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ReposDeleteFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposDeleteFilePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReposDeleteFileRequestBody;
}


export class ReposDeleteFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  fileCommit?: shared.FileCommit;

  @SpeakeasyMetadata()
  reposDeleteFile503ApplicationJsonObject?: ReposDeleteFile503ApplicationJson;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
