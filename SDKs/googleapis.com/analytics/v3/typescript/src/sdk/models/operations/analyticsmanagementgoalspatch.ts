import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AnalyticsManagementGoalsPatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=goalId" })
  goalId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" })
  profileId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" })
  webPropertyId: string;
}


export class AnalyticsManagementGoalsPatchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class AnalyticsManagementGoalsPatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AnalyticsManagementGoalsPatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AnalyticsManagementGoalsPatchPathParams;

  @SpeakeasyMetadata()
  queryParams: AnalyticsManagementGoalsPatchQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Goal;

  @SpeakeasyMetadata()
  security: AnalyticsManagementGoalsPatchSecurity;
}


export class AnalyticsManagementGoalsPatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  goal?: shared.Goal;

  @SpeakeasyMetadata()
  statusCode: number;
}
