import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReposDeleteReleaseAssetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=asset_id" })
  assetId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposDeleteReleaseAssetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposDeleteReleaseAssetPathParams;
}


export class ReposDeleteReleaseAssetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
