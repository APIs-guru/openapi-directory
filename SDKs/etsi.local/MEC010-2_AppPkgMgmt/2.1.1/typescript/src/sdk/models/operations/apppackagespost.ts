import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppPackagesPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateAppPkg;
}


export class AppPackagesPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AppPkgInfo })
  appPkgInfos?: shared.AppPkgInfo[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: shared.ProblemDetails;

  @SpeakeasyMetadata()
  statusCode: number;
}
