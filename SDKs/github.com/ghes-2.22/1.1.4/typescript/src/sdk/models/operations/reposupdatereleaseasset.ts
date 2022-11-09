import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposUpdateReleaseAssetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=asset_id" })
  assetId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposUpdateReleaseAssetRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;
}


export class ReposUpdateReleaseAssetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposUpdateReleaseAssetPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ReposUpdateReleaseAssetRequestBody;
}


export class ReposUpdateReleaseAssetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  releaseAsset?: shared.ReleaseAsset;
}
