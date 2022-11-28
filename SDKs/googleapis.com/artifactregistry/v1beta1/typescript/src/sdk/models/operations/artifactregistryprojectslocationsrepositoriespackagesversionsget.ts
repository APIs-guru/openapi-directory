import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export enum ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetViewEnum {
    VersionViewUnspecified = "VERSION_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}


export class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetViewEnum;
}


export class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption2;
}


export class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetPathParams;

  @SpeakeasyMetadata()
  queryParams: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetQueryParams;

  @SpeakeasyMetadata()
  security: ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurity;
}


export class ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  version?: shared.Version;
}
