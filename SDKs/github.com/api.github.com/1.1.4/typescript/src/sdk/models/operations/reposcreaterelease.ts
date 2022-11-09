import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposCreateReleasePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposCreateReleaseRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=draft" })
  draft?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=prerelease" })
  prerelease?: boolean;

  @Metadata({ data: "json, name=tag_name" })
  tagName: string;

  @Metadata({ data: "json, name=target_commitish" })
  targetCommitish?: string;
}


export class ReposCreateReleaseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposCreateReleasePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposCreateReleaseRequestBody;
}


export class ReposCreateReleaseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  release?: shared.Release;

  @Metadata()
  validationError?: shared.ValidationError;
}
