import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPullrequestsSelectedUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=selected_user" })
  selectedUser: string;
}

export enum GetPullrequestsSelectedUserStateEnum {
    Merged = "MERGED",
    Superseded = "SUPERSEDED",
    Open = "OPEN",
    Declined = "DECLINED"
}


export class GetPullrequestsSelectedUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: GetPullrequestsSelectedUserStateEnum;
}


export class GetPullrequestsSelectedUserSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2?: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;
}


export class GetPullrequestsSelectedUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPullrequestsSelectedUserPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPullrequestsSelectedUserQueryParams;

  @SpeakeasyMetadata()
  security: GetPullrequestsSelectedUserSecurity;
}


export class GetPullrequestsSelectedUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  paginatedPullrequests?: shared.PaginatedPullrequests;
}
