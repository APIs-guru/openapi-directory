import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export enum ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetViewEnum {
    VersionViewUnspecified = "VERSION_VIEW_UNSPECIFIED"
,    Basic = "BASIC"
,    Full = "FULL"
}


export class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetViewEnum;
}


export class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption2;
}


export class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetPathParams;

  @Metadata()
  queryParams: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetQueryParams;

  @Metadata()
  security: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurity;
}


export class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  version?: shared.Version;
}
