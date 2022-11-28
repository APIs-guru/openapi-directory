import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposUpdateReleasePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=release_id" })
  releaseId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposUpdateReleaseRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=draft" })
  draft?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=prerelease" })
  prerelease?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tag_name" })
  tagName?: string;

  @SpeakeasyMetadata({ data: "json, name=target_commitish" })
  targetCommitish?: string;
}


export class ReposUpdateReleaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposUpdateReleasePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReposUpdateReleaseRequestBody;
}


export class ReposUpdateReleaseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  release?: shared.Release;
}
