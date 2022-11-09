import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=resource" })
  resource: string;
}


export class BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyQueryParams extends SpeakeasyBase {
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


export class BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurityOption2;
}


export class BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyPathParams;

  @Metadata()
  queryParams: BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.GetIamPolicyRequest;

  @Metadata()
  security: BigqueryconnectionProjectsLocationsConnectionsGetIamPolicySecurity;
}


export class BigqueryconnectionProjectsLocationsConnectionsGetIamPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  policy?: shared.Policy;

  @Metadata()
  statusCode: number;
}
