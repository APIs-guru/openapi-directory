import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AppengineAppsFirewallIngressRulesListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=appsId" })
  appsId: string;
}


export class AppengineAppsFirewallIngressRulesListQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=matchingAddress" })
  matchingAddress?: string;

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


export class AppengineAppsFirewallIngressRulesListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AppengineAppsFirewallIngressRulesListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AppengineAppsFirewallIngressRulesListSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AppengineAppsFirewallIngressRulesListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AppengineAppsFirewallIngressRulesListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AppengineAppsFirewallIngressRulesListSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: AppengineAppsFirewallIngressRulesListSecurityOption3;
}


export class AppengineAppsFirewallIngressRulesListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AppengineAppsFirewallIngressRulesListPathParams;

  @Metadata()
  queryParams: AppengineAppsFirewallIngressRulesListQueryParams;

  @Metadata()
  security: AppengineAppsFirewallIngressRulesListSecurity;
}


export class AppengineAppsFirewallIngressRulesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listIngressRulesResponse?: shared.ListIngressRulesResponse;

  @Metadata()
  statusCode: number;
}
