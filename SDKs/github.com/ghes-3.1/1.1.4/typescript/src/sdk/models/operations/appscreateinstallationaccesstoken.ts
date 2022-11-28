import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppsCreateInstallationAccessTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=installation_id" })
  installationId: number;
}


export class AppsCreateInstallationAccessTokenRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: shared.AppPermissions;

  @SpeakeasyMetadata({ data: "json, name=repositories" })
  repositories?: string[];

  @SpeakeasyMetadata({ data: "json, name=repository_ids" })
  repositoryIds?: number[];
}


export class AppsCreateInstallationAccessToken415ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class AppsCreateInstallationAccessTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppsCreateInstallationAccessTokenPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: AppsCreateInstallationAccessTokenRequestBody;
}


export class AppsCreateInstallationAccessTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  appsCreateInstallationAccessToken415ApplicationJsonObject?: AppsCreateInstallationAccessToken415ApplicationJson;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  installationToken?: shared.InstallationToken;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
