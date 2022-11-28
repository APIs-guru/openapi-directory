import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OrgsListAppInstallationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class OrgsListAppInstallationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class OrgsListAppInstallationsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=accept" })
  accept: string;
}


export class OrgsListAppInstallations200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=installations", elemType: shared.InstallationGhes2 })
  installations: shared.InstallationGhes2[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class OrgsListAppInstallationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OrgsListAppInstallationsPathParams;

  @SpeakeasyMetadata()
  queryParams: OrgsListAppInstallationsQueryParams;

  @SpeakeasyMetadata()
  headers: OrgsListAppInstallationsHeaders;
}


export class OrgsListAppInstallationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  orgsListAppInstallations200ApplicationJsonObject?: OrgsListAppInstallations200ApplicationJson;
}
