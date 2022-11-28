import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppsListInstallationsForAuthenticatedUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class AppsListInstallationsForAuthenticatedUserHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


export class AppsListInstallationsForAuthenticatedUser200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=installations", elemType: shared.InstallationGhes2 })
  installations: shared.InstallationGhes2[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class AppsListInstallationsForAuthenticatedUser415ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class AppsListInstallationsForAuthenticatedUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AppsListInstallationsForAuthenticatedUserQueryParams;

  @SpeakeasyMetadata()
  headers: AppsListInstallationsForAuthenticatedUserHeaders;
}


export class AppsListInstallationsForAuthenticatedUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  appsListInstallationsForAuthenticatedUser200ApplicationJsonObject?: AppsListInstallationsForAuthenticatedUser200ApplicationJson;

  @SpeakeasyMetadata()
  appsListInstallationsForAuthenticatedUser415ApplicationJsonObject?: AppsListInstallationsForAuthenticatedUser415ApplicationJson;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;
}
