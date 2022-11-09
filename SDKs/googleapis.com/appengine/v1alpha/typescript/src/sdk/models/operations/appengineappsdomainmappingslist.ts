import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppengineAppsDomainMappingsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appsId" })
  appsId: string;
}


export class AppengineAppsDomainMappingsListQueryParams extends SpeakeasyBase {
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


export class AppengineAppsDomainMappingsListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AppengineAppsDomainMappingsListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AppengineAppsDomainMappingsListSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AppengineAppsDomainMappingsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AppengineAppsDomainMappingsListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AppengineAppsDomainMappingsListSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: AppengineAppsDomainMappingsListSecurityOption3;
}


export class AppengineAppsDomainMappingsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppengineAppsDomainMappingsListPathParams;

  @Metadata()
  queryParams: AppengineAppsDomainMappingsListQueryParams;

  @Metadata()
  security: AppengineAppsDomainMappingsListSecurity;
}


export class AppengineAppsDomainMappingsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listDomainMappingsResponse?: shared.ListDomainMappingsResponse;

  @Metadata()
  statusCode: number;
}
