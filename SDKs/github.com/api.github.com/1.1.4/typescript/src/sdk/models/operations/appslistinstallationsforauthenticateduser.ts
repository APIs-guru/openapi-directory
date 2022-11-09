import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppsListInstallationsForAuthenticatedUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class AppsListInstallationsForAuthenticatedUserRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AppsListInstallationsForAuthenticatedUserQueryParams;
}


export class AppsListInstallationsForAuthenticatedUser200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=installations", elemType: shared.Installation })
  installations: shared.Installation[];

  @Metadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class AppsListInstallationsForAuthenticatedUser415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class AppsListInstallationsForAuthenticatedUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  appsListInstallationsForAuthenticatedUser200ApplicationJsonObject?: AppsListInstallationsForAuthenticatedUser200ApplicationJson;

  @Metadata()
  appsListInstallationsForAuthenticatedUser415ApplicationJsonObject?: AppsListInstallationsForAuthenticatedUser415ApplicationJson;

  @Metadata()
  basicError?: shared.BasicError;
}
