import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AdminCustomerDevicesChromeosCommandsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=commandId" })
  commandId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=customerId" })
  customerId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: string;
}


export class AdminCustomerDevicesChromeosCommandsGetQueryParams extends SpeakeasyBase {
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


export class AdminCustomerDevicesChromeosCommandsGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdminCustomerDevicesChromeosCommandsGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdminCustomerDevicesChromeosCommandsGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AdminCustomerDevicesChromeosCommandsGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AdminCustomerDevicesChromeosCommandsGetSecurityOption2;
}


export class AdminCustomerDevicesChromeosCommandsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AdminCustomerDevicesChromeosCommandsGetPathParams;

  @Metadata()
  queryParams: AdminCustomerDevicesChromeosCommandsGetQueryParams;

  @Metadata()
  security: AdminCustomerDevicesChromeosCommandsGetSecurity;
}


export class AdminCustomerDevicesChromeosCommandsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  directoryChromeosdevicesCommand?: shared.DirectoryChromeosdevicesCommand;

  @Metadata()
  statusCode: number;
}
