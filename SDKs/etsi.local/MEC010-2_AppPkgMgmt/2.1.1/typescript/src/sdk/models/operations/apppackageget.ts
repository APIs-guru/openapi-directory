import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppPackageGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appPkgId" })
  appPkgId: string;
}


export class AppPackageGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppPackageGetPathParams;
}


export class AppPackageGetResponse extends SpeakeasyBase {
  @Metadata()
  appPkgInfo?: shared.AppPkgInfo;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: shared.ProblemDetails;

  @Metadata()
  statusCode: number;
}
