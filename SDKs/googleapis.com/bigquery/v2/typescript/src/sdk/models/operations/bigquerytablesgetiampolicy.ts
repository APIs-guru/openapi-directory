import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BigqueryTablesGetIamPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=resource" })
  resource: string;
}


export class BigqueryTablesGetIamPolicyQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class BigqueryTablesGetIamPolicySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigqueryTablesGetIamPolicySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigqueryTablesGetIamPolicySecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class BigqueryTablesGetIamPolicySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: BigqueryTablesGetIamPolicySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: BigqueryTablesGetIamPolicySecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: BigqueryTablesGetIamPolicySecurityOption3;
}


export class BigqueryTablesGetIamPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BigqueryTablesGetIamPolicyPathParams;

  @Metadata()
  queryParams: BigqueryTablesGetIamPolicyQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.GetIamPolicyRequest;

  @Metadata()
  security: BigqueryTablesGetIamPolicySecurity;
}


export class BigqueryTablesGetIamPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  policy?: shared.Policy;

  @Metadata()
  statusCode: number;
}
