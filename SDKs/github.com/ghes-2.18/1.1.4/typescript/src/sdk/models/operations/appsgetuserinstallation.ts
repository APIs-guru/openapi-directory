import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppsGetUserInstallationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class AppsGetUserInstallationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


export class AppsGetUserInstallationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppsGetUserInstallationPathParams;

  @Metadata()
  headers: AppsGetUserInstallationHeaders;
}


export class AppsGetUserInstallationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  installationGhes2?: shared.InstallationGhes2;
}
