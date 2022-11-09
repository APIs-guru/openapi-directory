import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReposDeleteReleasePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=release_id" })
  releaseId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposDeleteReleaseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposDeleteReleasePathParams;
}


export class ReposDeleteReleaseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
