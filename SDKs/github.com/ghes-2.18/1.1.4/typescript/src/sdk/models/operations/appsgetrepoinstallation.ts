import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppsGetRepoInstallationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class AppsGetRepoInstallationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


export class AppsGetRepoInstallationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppsGetRepoInstallationPathParams;

  @Metadata()
  headers: AppsGetRepoInstallationHeaders;
}


export class AppsGetRepoInstallationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  installationGhes2?: shared.InstallationGhes2;
}
