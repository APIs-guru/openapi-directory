import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposCreateCommitCommentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=commit_sha" })
  commitSha: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposCreateCommitCommentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;

  @Metadata({ data: "json, name=line" })
  line?: number;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=position" })
  position?: number;
}


export class ReposCreateCommitCommentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposCreateCommitCommentPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposCreateCommitCommentRequestBody;
}


export class ReposCreateCommitCommentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  commitComment?: shared.CommitComment;

  @Metadata()
  validationError?: shared.ValidationError;
}
