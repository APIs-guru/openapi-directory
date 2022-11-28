import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GitCreateCommitPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


// GitCreateCommitRequestBodyAuthor
/** 
 * Information about the author of the commit. By default, the `author` will be the authenticated user and the current date. See the `author` and `committer` object below for details.
**/
export class GitCreateCommitRequestBodyAuthor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// GitCreateCommitRequestBodyCommitter
/** 
 * Information about the person who is making the commit. By default, `committer` will use the information set in `author`. See the `author` and `committer` object below for details.
**/
export class GitCreateCommitRequestBodyCommitter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class GitCreateCommitRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: GitCreateCommitRequestBodyAuthor;

  @SpeakeasyMetadata({ data: "json, name=committer" })
  committer?: GitCreateCommitRequestBodyCommitter;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=parents" })
  parents?: string[];

  @SpeakeasyMetadata({ data: "json, name=signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "json, name=tree" })
  tree: string;
}


export class GitCreateCommitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GitCreateCommitPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: GitCreateCommitRequestBody;
}


export class GitCreateCommitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  gitCommit?: shared.GitCommit;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
