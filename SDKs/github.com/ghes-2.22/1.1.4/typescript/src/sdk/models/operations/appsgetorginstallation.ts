import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppsGetOrgInstallationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class AppsGetOrgInstallationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppsGetOrgInstallationPathParams;
}


export class AppsGetOrgInstallationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  installationGhes2?: shared.InstallationGhes2;
}
