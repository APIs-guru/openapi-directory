import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AnalyticshubOrganizationsLocationsDataExchangesListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organization" })
  organization: string;
}


export class AnalyticshubOrganizationsLocationsDataExchangesListQueryParams extends SpeakeasyBase {
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


export class AnalyticshubOrganizationsLocationsDataExchangesListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticshubOrganizationsLocationsDataExchangesListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticshubOrganizationsLocationsDataExchangesListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AnalyticshubOrganizationsLocationsDataExchangesListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AnalyticshubOrganizationsLocationsDataExchangesListSecurityOption2;
}


export class AnalyticshubOrganizationsLocationsDataExchangesListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AnalyticshubOrganizationsLocationsDataExchangesListPathParams;

  @Metadata()
  queryParams: AnalyticshubOrganizationsLocationsDataExchangesListQueryParams;

  @Metadata()
  security: AnalyticshubOrganizationsLocationsDataExchangesListSecurity;
}


export class AnalyticshubOrganizationsLocationsDataExchangesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listOrgDataExchangesResponse?: shared.ListOrgDataExchangesResponse;

  @Metadata()
  statusCode: number;
}
