import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AdexchangebuyerBudgetPatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=billingId" })
  billingId: string;
}


export class AdexchangebuyerBudgetPatchQueryParams extends SpeakeasyBase {
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


export class AdexchangebuyerBudgetPatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdexchangebuyerBudgetPatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AdexchangebuyerBudgetPatchPathParams;

  @Metadata()
  queryParams: AdexchangebuyerBudgetPatchQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Budget;

  @Metadata()
  security: AdexchangebuyerBudgetPatchSecurity;
}


export class AdexchangebuyerBudgetPatchResponse extends SpeakeasyBase {
  @Metadata()
  budget?: shared.Budget;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
