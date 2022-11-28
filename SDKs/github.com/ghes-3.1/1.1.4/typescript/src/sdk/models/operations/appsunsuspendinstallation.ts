import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppsUnsuspendInstallationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=installation_id" })
  installationId: number;
}


export class AppsUnsuspendInstallationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppsUnsuspendInstallationPathParams;
}


export class AppsUnsuspendInstallationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;
}
