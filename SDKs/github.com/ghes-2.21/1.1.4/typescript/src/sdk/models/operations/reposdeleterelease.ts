import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReposDeleteReleasePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=release_id" })
  releaseId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposDeleteReleaseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposDeleteReleasePathParams;
}


export class ReposDeleteReleaseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
