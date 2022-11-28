import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppengineAppsAuthorizedCertificatesGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appsId" })
  appsId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=authorizedCertificatesId" })
  authorizedCertificatesId: string;
}

export enum AppengineAppsAuthorizedCertificatesGetViewEnum {
    BasicCertificate = "BASIC_CERTIFICATE",
    FullCertificate = "FULL_CERTIFICATE"
}


export class AppengineAppsAuthorizedCertificatesGetQueryParams extends SpeakeasyBase {
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
  view?: AppengineAppsAuthorizedCertificatesGetViewEnum;
}


export class AppengineAppsAuthorizedCertificatesGetSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AppengineAppsAuthorizedCertificatesGetSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AppengineAppsAuthorizedCertificatesGetSecurityOption3 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AppengineAppsAuthorizedCertificatesGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: AppengineAppsAuthorizedCertificatesGetSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: AppengineAppsAuthorizedCertificatesGetSecurityOption2;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option3?: AppengineAppsAuthorizedCertificatesGetSecurityOption3;
}


export class AppengineAppsAuthorizedCertificatesGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppengineAppsAuthorizedCertificatesGetPathParams;

  @SpeakeasyMetadata()
  queryParams: AppengineAppsAuthorizedCertificatesGetQueryParams;

  @SpeakeasyMetadata()
  security: AppengineAppsAuthorizedCertificatesGetSecurity;
}


export class AppengineAppsAuthorizedCertificatesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  authorizedCertificate?: shared.AuthorizedCertificate;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
