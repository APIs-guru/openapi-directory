import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppsGetOrgInstallationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class AppsGetOrgInstallationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


export class AppsGetOrgInstallationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppsGetOrgInstallationPathParams;

  @Metadata()
  headers: AppsGetOrgInstallationHeaders;
}


export class AppsGetOrgInstallationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  installationGhes2?: shared.InstallationGhes2;
}
