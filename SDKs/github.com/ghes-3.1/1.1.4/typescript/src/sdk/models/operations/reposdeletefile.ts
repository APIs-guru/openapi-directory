import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposDeleteFilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


// ReposDeleteFileRequestBodyAuthor
/** 
 * object containing information about the author.
**/
export class ReposDeleteFileRequestBodyAuthor extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


// ReposDeleteFileRequestBodyCommitter
/** 
 * object containing information about the committer.
**/
export class ReposDeleteFileRequestBodyCommitter extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class ReposDeleteFileRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=author" })
  author?: ReposDeleteFileRequestBodyAuthor;

  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=committer" })
  committer?: ReposDeleteFileRequestBodyCommitter;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=sha" })
  sha: string;
}


export class ReposDeleteFileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposDeleteFilePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposDeleteFileRequestBody;
}


export class ReposDeleteFile503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ReposDeleteFileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  fileCommit?: shared.FileCommit;

  @Metadata()
  reposDeleteFile503ApplicationJsonObject?: ReposDeleteFile503ApplicationJson;

  @Metadata()
  validationError?: shared.ValidationError;
}
