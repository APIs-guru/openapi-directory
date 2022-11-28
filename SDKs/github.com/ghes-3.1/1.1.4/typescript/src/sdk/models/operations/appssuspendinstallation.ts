import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppsSuspendInstallationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=installation_id" })
  installationId: number;
}


export class AppsSuspendInstallationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppsSuspendInstallationPathParams;
}


export class AppsSuspendInstallationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;
}
