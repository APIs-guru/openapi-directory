import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppsGetInstallationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=installation_id" })
  installationId: number;
}


export class AppsGetInstallationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppsGetInstallationPathParams;
}


export class AppsGetInstallation415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class AppsGetInstallationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  appsGetInstallation415ApplicationJsonObject?: AppsGetInstallation415ApplicationJson;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  installation?: shared.Installation;
}
