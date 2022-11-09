import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OrgsListAppInstallationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class OrgsListAppInstallationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class OrgsListAppInstallationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OrgsListAppInstallationsPathParams;

  @Metadata()
  queryParams: OrgsListAppInstallationsQueryParams;
}


export class OrgsListAppInstallations200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=installations", elemType: shared.InstallationGhes2 })
  installations: shared.InstallationGhes2[];

  @Metadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class OrgsListAppInstallationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  orgsListAppInstallations200ApplicationJsonObject?: OrgsListAppInstallations200ApplicationJson;
}
