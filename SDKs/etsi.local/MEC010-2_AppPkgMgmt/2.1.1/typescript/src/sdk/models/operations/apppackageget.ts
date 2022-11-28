import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppPackageGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appPkgId" })
  appPkgId: string;
}


export class AppPackageGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppPackageGetPathParams;
}


export class AppPackageGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  appPkgInfo?: shared.AppPkgInfo;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  problemDetails?: shared.ProblemDetails;

  @SpeakeasyMetadata()
  statusCode: number;
}
