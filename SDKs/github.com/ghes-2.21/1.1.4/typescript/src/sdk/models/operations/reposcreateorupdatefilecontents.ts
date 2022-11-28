import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposCreateOrUpdateFileContentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=path" })
  path: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


// ReposCreateOrUpdateFileContentsRequestBodyAuthor
/** 
 * The author of the file. Default: The `committer` or the authenticated user if you omit `committer`.
**/
export class ReposCreateOrUpdateFileContentsRequestBodyAuthor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


// ReposCreateOrUpdateFileContentsRequestBodyCommitter
/** 
 * The person that committed the file. Default: the authenticated user.
**/
export class ReposCreateOrUpdateFileContentsRequestBodyCommitter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class ReposCreateOrUpdateFileContentsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: ReposCreateOrUpdateFileContentsRequestBodyAuthor;

  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch?: string;

  @SpeakeasyMetadata({ data: "json, name=committer" })
  committer?: ReposCreateOrUpdateFileContentsRequestBodyCommitter;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha?: string;
}


export class ReposCreateOrUpdateFileContentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposCreateOrUpdateFileContentsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReposCreateOrUpdateFileContentsRequestBody;
}


export class ReposCreateOrUpdateFileContentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  fileCommit?: shared.FileCommit;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
