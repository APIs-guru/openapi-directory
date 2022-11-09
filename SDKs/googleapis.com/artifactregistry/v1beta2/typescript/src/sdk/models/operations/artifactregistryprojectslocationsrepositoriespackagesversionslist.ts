import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListViewEnum {
    VersionViewUnspecified = "VERSION_VIEW_UNSPECIFIED"
,    Basic = "BASIC"
,    Full = "FULL"
}


export class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListViewEnum;
}


export class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption2;
}


export class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListPathParams;

  @Metadata()
  queryParams: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListQueryParams;

  @Metadata()
  security: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurity;
}


export class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listVersionsResponse?: shared.ListVersionsResponse;

  @Metadata()
  statusCode: number;
}
