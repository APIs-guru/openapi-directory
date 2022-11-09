import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ArtifactregistryProjectsLocationsRepositoriesPackagesListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class ArtifactregistryProjectsLocationsRepositoriesPackagesListQueryParams extends SpeakeasyBase {
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
}


export class ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurityOption2;
}


export class ArtifactregistryProjectsLocationsRepositoriesPackagesListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ArtifactregistryProjectsLocationsRepositoriesPackagesListPathParams;

  @Metadata()
  queryParams: ArtifactregistryProjectsLocationsRepositoriesPackagesListQueryParams;

  @Metadata()
  security: ArtifactregistryProjectsLocationsRepositoriesPackagesListSecurity;
}


export class ArtifactregistryProjectsLocationsRepositoriesPackagesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listPackagesResponse?: shared.ListPackagesResponse;

  @Metadata()
  statusCode: number;
}
