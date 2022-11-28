import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppsAddRepoToInstallationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=installation_id" })
  installationId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repository_id" })
  repositoryId: number;
}


export class AppsAddRepoToInstallationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppsAddRepoToInstallationPathParams;
}


export class AppsAddRepoToInstallationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;
}
