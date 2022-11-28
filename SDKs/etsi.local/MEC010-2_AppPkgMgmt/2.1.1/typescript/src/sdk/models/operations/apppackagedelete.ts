import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppPackageDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appPkgId" })
  appPkgId: string;
}


export class AppPackageDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppPackageDeletePathParams;
}


export class AppPackageDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: shared.ProblemDetails;

  @SpeakeasyMetadata()
  statusCode: number;
}
