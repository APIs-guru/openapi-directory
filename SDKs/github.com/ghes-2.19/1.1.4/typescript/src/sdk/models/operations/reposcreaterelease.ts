import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposCreateReleasePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposCreateReleaseRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=draft" })
  draft?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=prerelease" })
  prerelease?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tag_name" })
  tagName: string;

  @SpeakeasyMetadata({ data: "json, name=target_commitish" })
  targetCommitish?: string;
}


export class ReposCreateReleaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposCreateReleasePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReposCreateReleaseRequestBody;
}


export class ReposCreateReleaseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  release?: shared.Release;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
