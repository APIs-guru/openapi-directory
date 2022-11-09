import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AndroidenterpriseEnterprisesGetServiceAccountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=enterpriseId" })
  enterpriseId: string;
}

export enum AndroidenterpriseEnterprisesGetServiceAccountKeyTypeEnum {
    GoogleCredentials = "googleCredentials"
,    Pkcs12 = "pkcs12"
}


export class AndroidenterpriseEnterprisesGetServiceAccountQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=keyType" })
  keyType?: AndroidenterpriseEnterprisesGetServiceAccountKeyTypeEnum;

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


export class AndroidenterpriseEnterprisesGetServiceAccountSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AndroidenterpriseEnterprisesGetServiceAccountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AndroidenterpriseEnterprisesGetServiceAccountPathParams;

  @Metadata()
  queryParams: AndroidenterpriseEnterprisesGetServiceAccountQueryParams;

  @Metadata()
  security: AndroidenterpriseEnterprisesGetServiceAccountSecurity;
}


export class AndroidenterpriseEnterprisesGetServiceAccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceAccount?: shared.ServiceAccount;

  @Metadata()
  statusCode: number;
}
