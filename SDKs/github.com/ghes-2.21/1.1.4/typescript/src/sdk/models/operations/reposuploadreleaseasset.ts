import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ReposUploadReleaseAssetServerList = [
	"https://{origin}",
] as const;


export class ReposUploadReleaseAssetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=release_id" })
  releaseId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposUploadReleaseAssetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;
}


export class ReposUploadReleaseAssetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ReposUploadReleaseAssetPathParams;

  @SpeakeasyMetadata()
  queryParams: ReposUploadReleaseAssetQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=*/*" })
  request?: string;
}


export class ReposUploadReleaseAssetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  releaseAsset?: shared.ReleaseAsset;
}
