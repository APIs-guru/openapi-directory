import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReposGetReleaseAssetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=asset_id" })
  assetId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposGetReleaseAssetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposGetReleaseAssetPathParams;
}


export class ReposGetReleaseAsset415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class ReposGetReleaseAssetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  releaseAsset?: shared.ReleaseAsset;

  @Metadata()
  reposGetReleaseAsset415ApplicationJsonObject?: ReposGetReleaseAsset415ApplicationJson;
}
