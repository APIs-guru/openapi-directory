import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposListReleaseAssetsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=release_id" })
  releaseId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposListReleaseAssetsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ReposListReleaseAssetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposListReleaseAssetsPathParams;

  @SpeakeasyMetadata()
  queryParams: ReposListReleaseAssetsQueryParams;
}


export class ReposListReleaseAssetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.ReleaseAsset })
  releaseAssets?: shared.ReleaseAsset[];
}
