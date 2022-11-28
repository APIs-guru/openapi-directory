import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppPackagePatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appPkgId" })
  appPkgId: string;
}


export class AppPackagePatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppPackagePatchPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AppPkgInfoModifications;
}


export class AppPackagePatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  appPkgInfoModifications?: shared.AppPkgInfoModifications;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: shared.ProblemDetails;

  @SpeakeasyMetadata()
  statusCode: number;
}
