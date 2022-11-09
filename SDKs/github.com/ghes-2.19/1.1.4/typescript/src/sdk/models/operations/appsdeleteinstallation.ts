import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppsDeleteInstallationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=installation_id" })
  installationId: number;
}


export class AppsDeleteInstallationHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


export class AppsDeleteInstallationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppsDeleteInstallationPathParams;

  @Metadata()
  headers: AppsDeleteInstallationHeaders;
}


export class AppsDeleteInstallationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;
}
