import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppsGetUserInstallationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class AppsGetUserInstallationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


export class AppsGetUserInstallationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppsGetUserInstallationPathParams;

  @SpeakeasyMetadata()
  headers: AppsGetUserInstallationHeaders;
}


export class AppsGetUserInstallationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  installationGhes2?: shared.InstallationGhes2;
}
