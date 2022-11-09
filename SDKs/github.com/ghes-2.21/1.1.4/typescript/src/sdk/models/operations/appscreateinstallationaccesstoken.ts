import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppsCreateInstallationAccessTokenPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=installation_id" })
  installationId: number;
}


export class AppsCreateInstallationAccessTokenHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


export class AppsCreateInstallationAccessTokenRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=permissions" })
  permissions?: shared.AppPermissions;

  @Metadata({ data: "json, name=repositories" })
  repositories?: string[];

  @Metadata({ data: "json, name=repository_ids" })
  repositoryIds?: number[];
}


export class AppsCreateInstallationAccessTokenRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppsCreateInstallationAccessTokenPathParams;

  @Metadata()
  headers: AppsCreateInstallationAccessTokenHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: AppsCreateInstallationAccessTokenRequestBody;
}


export class AppsCreateInstallationAccessToken415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class AppsCreateInstallationAccessTokenResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  appsCreateInstallationAccessToken415ApplicationJsonObject?: AppsCreateInstallationAccessToken415ApplicationJson;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  installationToken?: shared.InstallationToken;

  @Metadata()
  validationError?: shared.ValidationError;
}
