import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppsDeleteInstallationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=installation_id" })
  installationId: number;
}


export class AppsDeleteInstallationHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


export class AppsDeleteInstallationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppsDeleteInstallationPathParams;

  @SpeakeasyMetadata()
  headers: AppsDeleteInstallationHeaders;
}


export class AppsDeleteInstallationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;
}
