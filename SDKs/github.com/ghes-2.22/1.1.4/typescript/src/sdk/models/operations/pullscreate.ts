import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PullsCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class PullsCreateRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=base" })
  base: string;

  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=draft" })
  draft?: boolean;

  @Metadata({ data: "json, name=head" })
  head: string;

  @Metadata({ data: "json, name=issue" })
  issue?: number;

  @Metadata({ data: "json, name=maintainer_can_modify" })
  maintainerCanModify?: boolean;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class PullsCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PullsCreatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PullsCreateRequestBody;
}


export class PullsCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  pullRequest?: shared.PullRequest;

  @Metadata()
  validationError?: shared.ValidationError;
}
