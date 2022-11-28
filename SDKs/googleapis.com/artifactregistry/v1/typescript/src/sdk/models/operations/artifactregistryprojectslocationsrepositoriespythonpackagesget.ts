import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}

export enum ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetViewEnum {
    VersionViewUnspecified = "VERSION_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}


export class ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetQueryParams extends SpeakeasyBase {
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
  view?: ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetViewEnum;
}


export class ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurityOption2;
}


export class ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetPathParams;

  @SpeakeasyMetadata()
  queryParams: ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetQueryParams;

  @SpeakeasyMetadata()
  security: ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetSecurity;
}


export class ArtifactregistryProjectsLocationsRepositoriesPythonPackagesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pythonPackage?: shared.PythonPackage;

  @SpeakeasyMetadata()
  statusCode: number;
}
