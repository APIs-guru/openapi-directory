import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchUsersListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=returnFullUserInfo" })
  returnFullUserInfo?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=secondaryLookup" })
  secondaryLookup?: boolean;
}


export class SearchUsersListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class SearchUsersListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchUsersListQueryParams;

  @Metadata()
  security: SearchUsersListSecurity;
}


export class SearchUsersListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  users?: any[];
}
