import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PullsCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class PullsCreateRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=base" })
  base: string;

  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=draft" })
  draft?: boolean;

  @SpeakeasyMetadata({ data: "json, name=head" })
  head: string;

  @SpeakeasyMetadata({ data: "json, name=issue" })
  issue?: number;

  @SpeakeasyMetadata({ data: "json, name=maintainer_can_modify" })
  maintainerCanModify?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class PullsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PullsCreatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PullsCreateRequestBody;
}


export class PullsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  pullRequest?: shared.PullRequest;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
