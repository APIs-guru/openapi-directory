import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DatatransferTransfersGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dataTransferId" })
  dataTransferId: string;
}


export class DatatransferTransfersGetQueryParams extends SpeakeasyBase {
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


export class DatatransferTransfersGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DatatransferTransfersGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DatatransferTransfersGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DatatransferTransfersGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DatatransferTransfersGetSecurityOption2;
}


export class DatatransferTransfersGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DatatransferTransfersGetPathParams;

  @Metadata()
  queryParams: DatatransferTransfersGetQueryParams;

  @Metadata()
  security: DatatransferTransfersGetSecurity;
}


export class DatatransferTransfersGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dataTransfer?: shared.DataTransfer;

  @Metadata()
  statusCode: number;
}
