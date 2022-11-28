import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReposDeleteReleaseAssetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=asset_id" })
  assetId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposDeleteReleaseAssetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposDeleteReleaseAssetPathParams;
}


export class ReposDeleteReleaseAssetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
