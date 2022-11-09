import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const REPOSUPLOADRELEASEASSET_SERVERS = [
	"https://{origin}",
];



export class ReposUploadReleaseAssetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=release_id" })
  releaseId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposUploadReleaseAssetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=label" })
  label?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;
}


export class ReposUploadReleaseAssetRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ReposUploadReleaseAssetPathParams;

  @Metadata()
  queryParams: ReposUploadReleaseAssetQueryParams;

  @Metadata({ data: "request, media_type=*/*" })
  request?: string;
}


export class ReposUploadReleaseAssetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  releaseAsset?: shared.ReleaseAsset;
}
