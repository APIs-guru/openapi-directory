import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DirectoryChromeosdevicesGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=customerId" })
  customerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: string;
}

export enum DirectoryChromeosdevicesGetProjectionEnum {
    Basic = "BASIC"
,    Full = "FULL"
}


export class DirectoryChromeosdevicesGetQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=projection" })
  projection?: DirectoryChromeosdevicesGetProjectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DirectoryChromeosdevicesGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DirectoryChromeosdevicesGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DirectoryChromeosdevicesGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DirectoryChromeosdevicesGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DirectoryChromeosdevicesGetSecurityOption2;
}


export class DirectoryChromeosdevicesGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DirectoryChromeosdevicesGetPathParams;

  @Metadata()
  queryParams: DirectoryChromeosdevicesGetQueryParams;

  @Metadata()
  security: DirectoryChromeosdevicesGetSecurity;
}


export class DirectoryChromeosdevicesGetResponse extends SpeakeasyBase {
  @Metadata()
  chromeOsDevice?: shared.ChromeOsDevice;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
