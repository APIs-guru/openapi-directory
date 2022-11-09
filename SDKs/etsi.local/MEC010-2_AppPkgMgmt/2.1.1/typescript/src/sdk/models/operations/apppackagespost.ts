import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppPackagesPostRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateAppPkg;
}


export class AppPackagesPostResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AppPkgInfo })
  appPkgInfos?: shared.AppPkgInfo[];

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: shared.ProblemDetails;

  @Metadata()
  statusCode: number;
}
