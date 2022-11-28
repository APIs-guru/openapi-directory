import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DirectoryChromeosdevicesGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customerId" })
  customerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: string;
}

export enum DirectoryChromeosdevicesGetProjectionEnum {
    Basic = "BASIC",
    Full = "FULL"
}


export class DirectoryChromeosdevicesGetQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projection" })
  projection?: DirectoryChromeosdevicesGetProjectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DirectoryChromeosdevicesGetSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DirectoryChromeosdevicesGetSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DirectoryChromeosdevicesGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: DirectoryChromeosdevicesGetSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: DirectoryChromeosdevicesGetSecurityOption2;
}


export class DirectoryChromeosdevicesGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DirectoryChromeosdevicesGetPathParams;

  @SpeakeasyMetadata()
  queryParams: DirectoryChromeosdevicesGetQueryParams;

  @SpeakeasyMetadata()
  security: DirectoryChromeosdevicesGetSecurity;
}


export class DirectoryChromeosdevicesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  chromeOsDevice?: shared.ChromeOsDevice;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
