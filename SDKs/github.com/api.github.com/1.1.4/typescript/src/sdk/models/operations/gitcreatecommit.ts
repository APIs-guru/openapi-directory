import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GitCreateCommitPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


// GitCreateCommitRequestBodyAuthor
/** 
 * Information about the author of the commit. By default, the `author` will be the authenticated user and the current date. See the `author` and `committer` object below for details.
**/
export class GitCreateCommitRequestBodyAuthor extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


// GitCreateCommitRequestBodyCommitter
/** 
 * Information about the person who is making the commit. By default, `committer` will use the information set in `author`. See the `author` and `committer` object below for details.
**/
export class GitCreateCommitRequestBodyCommitter extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class GitCreateCommitRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=author" })
  author?: GitCreateCommitRequestBodyAuthor;

  @Metadata({ data: "json, name=committer" })
  committer?: GitCreateCommitRequestBodyCommitter;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=parents" })
  parents?: string[];

  @Metadata({ data: "json, name=signature" })
  signature?: string;

  @Metadata({ data: "json, name=tree" })
  tree: string;
}


export class GitCreateCommitRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GitCreateCommitPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: GitCreateCommitRequestBody;
}


export class GitCreateCommitResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  gitCommit?: shared.GitCommit;

  @Metadata()
  validationError?: shared.ValidationError;
}
