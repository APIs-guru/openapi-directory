import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposCreateOrUpdateFileContentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


// ReposCreateOrUpdateFileContentsRequestBodyAuthor
/** 
 * The author of the file. Default: The `committer` or the authenticated user if you omit `committer`.
**/
export class ReposCreateOrUpdateFileContentsRequestBodyAuthor extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}


// ReposCreateOrUpdateFileContentsRequestBodyCommitter
/** 
 * The person that committed the file. Default: the authenticated user.
**/
export class ReposCreateOrUpdateFileContentsRequestBodyCommitter extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}


export class ReposCreateOrUpdateFileContentsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=author" })
  author?: ReposCreateOrUpdateFileContentsRequestBodyAuthor;

  @Metadata({ data: "json, name=branch" })
  branch?: string;

  @Metadata({ data: "json, name=committer" })
  committer?: ReposCreateOrUpdateFileContentsRequestBodyCommitter;

  @Metadata({ data: "json, name=content" })
  content: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=sha" })
  sha?: string;
}


export class ReposCreateOrUpdateFileContentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposCreateOrUpdateFileContentsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposCreateOrUpdateFileContentsRequestBody;
}


export class ReposCreateOrUpdateFileContentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  fileCommit?: shared.FileCommit;

  @Metadata()
  validationError?: shared.ValidationError;
}
