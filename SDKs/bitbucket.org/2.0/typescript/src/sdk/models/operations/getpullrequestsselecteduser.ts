import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPullrequestsSelectedUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=selected_user" })
  selectedUser: string;
}

export enum GetPullrequestsSelectedUserStateEnum {
    Merged = "MERGED"
,    Superseded = "SUPERSEDED"
,    Open = "OPEN"
,    Declined = "DECLINED"
}


export class GetPullrequestsSelectedUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: GetPullrequestsSelectedUserStateEnum;
}


export class GetPullrequestsSelectedUserSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetPullrequestsSelectedUserSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic: shared.SchemeBasic;
}


export class GetPullrequestsSelectedUserSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class GetPullrequestsSelectedUserSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetPullrequestsSelectedUserSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetPullrequestsSelectedUserSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetPullrequestsSelectedUserSecurityOption3;
}


export class GetPullrequestsSelectedUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPullrequestsSelectedUserPathParams;

  @Metadata()
  queryParams: GetPullrequestsSelectedUserQueryParams;

  @Metadata()
  security: GetPullrequestsSelectedUserSecurity;
}


export class GetPullrequestsSelectedUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  paginatedPullrequests?: shared.PaginatedPullrequests;
}
