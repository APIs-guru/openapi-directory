import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchUsersListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=returnFullUserInfo" })
  returnFullUserInfo?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=secondaryLookup" })
  secondaryLookup?: boolean;
}


export class SearchUsersListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class SearchUsersListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchUsersListQueryParams;

  @SpeakeasyMetadata()
  security: SearchUsersListSecurity;
}


export class SearchUsersListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  users?: any[];
}
