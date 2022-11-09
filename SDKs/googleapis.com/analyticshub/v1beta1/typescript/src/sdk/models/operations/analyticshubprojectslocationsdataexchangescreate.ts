import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AnalyticshubProjectsLocationsDataExchangesCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class AnalyticshubProjectsLocationsDataExchangesCreateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dataExchangeId" })
  dataExchangeId?: string;

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


export class AnalyticshubProjectsLocationsDataExchangesCreateSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticshubProjectsLocationsDataExchangesCreateSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticshubProjectsLocationsDataExchangesCreateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AnalyticshubProjectsLocationsDataExchangesCreateSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AnalyticshubProjectsLocationsDataExchangesCreateSecurityOption2;
}


export class AnalyticshubProjectsLocationsDataExchangesCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AnalyticshubProjectsLocationsDataExchangesCreatePathParams;

  @Metadata()
  queryParams: AnalyticshubProjectsLocationsDataExchangesCreateQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.DataExchange;

  @Metadata()
  security: AnalyticshubProjectsLocationsDataExchangesCreateSecurity;
}


export class AnalyticshubProjectsLocationsDataExchangesCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dataExchange?: shared.DataExchange;

  @Metadata()
  statusCode: number;
}
