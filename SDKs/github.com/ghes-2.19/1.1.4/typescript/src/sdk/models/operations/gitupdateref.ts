import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GitUpdateRefPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ref" })
  ref: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class GitUpdateRefRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=force" })
  force?: boolean;

  @Metadata({ data: "json, name=sha" })
  sha: string;
}


export class GitUpdateRefRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GitUpdateRefPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: GitUpdateRefRequestBody;
}


export class GitUpdateRefResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  gitRef?: shared.GitRef;

  @Metadata()
  validationError?: shared.ValidationError;
}
