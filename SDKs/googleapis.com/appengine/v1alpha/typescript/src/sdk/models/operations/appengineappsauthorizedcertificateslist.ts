import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppengineAppsAuthorizedCertificatesListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appsId" })
  appsId: string;
}

export enum AppengineAppsAuthorizedCertificatesListViewEnum {
    BasicCertificate = "BASIC_CERTIFICATE"
,    FullCertificate = "FULL_CERTIFICATE"
}


export class AppengineAppsAuthorizedCertificatesListQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: AppengineAppsAuthorizedCertificatesListViewEnum;
}


export class AppengineAppsAuthorizedCertificatesListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AppengineAppsAuthorizedCertificatesListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AppengineAppsAuthorizedCertificatesListSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AppengineAppsAuthorizedCertificatesListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AppengineAppsAuthorizedCertificatesListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AppengineAppsAuthorizedCertificatesListSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: AppengineAppsAuthorizedCertificatesListSecurityOption3;
}


export class AppengineAppsAuthorizedCertificatesListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppengineAppsAuthorizedCertificatesListPathParams;

  @Metadata()
  queryParams: AppengineAppsAuthorizedCertificatesListQueryParams;

  @Metadata()
  security: AppengineAppsAuthorizedCertificatesListSecurity;
}


export class AppengineAppsAuthorizedCertificatesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listAuthorizedCertificatesResponse?: shared.ListAuthorizedCertificatesResponse;

  @Metadata()
  statusCode: number;
}
