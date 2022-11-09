import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppPackagePatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appPkgId" })
  appPkgId: string;
}


export class AppPackagePatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppPackagePatchPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.AppPkgInfoModifications;
}


export class AppPackagePatchResponse extends SpeakeasyBase {
  @Metadata()
  appPkgInfoModifications?: shared.AppPkgInfoModifications;

  @Metadata()
  contentType: string;

  @Metadata()
  problemDetails?: shared.ProblemDetails;

  @Metadata()
  statusCode: number;
}
