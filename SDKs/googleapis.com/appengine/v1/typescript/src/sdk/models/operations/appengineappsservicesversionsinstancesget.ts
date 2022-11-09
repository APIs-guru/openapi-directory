import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppengineAppsServicesVersionsInstancesGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appsId" })
  appsId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=instancesId" })
  instancesId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=servicesId" })
  servicesId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionsId" })
  versionsId: string;
}


export class AppengineAppsServicesVersionsInstancesGetQueryParams extends SpeakeasyBase {
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
}


export class AppengineAppsServicesVersionsInstancesGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AppengineAppsServicesVersionsInstancesGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AppengineAppsServicesVersionsInstancesGetSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AppengineAppsServicesVersionsInstancesGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AppengineAppsServicesVersionsInstancesGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AppengineAppsServicesVersionsInstancesGetSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: AppengineAppsServicesVersionsInstancesGetSecurityOption3;
}


export class AppengineAppsServicesVersionsInstancesGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppengineAppsServicesVersionsInstancesGetPathParams;

  @Metadata()
  queryParams: AppengineAppsServicesVersionsInstancesGetQueryParams;

  @Metadata()
  security: AppengineAppsServicesVersionsInstancesGetSecurity;
}


export class AppengineAppsServicesVersionsInstancesGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  instance?: shared.Instance;

  @Metadata()
  statusCode: number;
}
