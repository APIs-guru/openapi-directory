import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UsersListFollowersForUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class UsersListFollowersForUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class UsersListFollowersForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsersListFollowersForUserPathParams;

  @SpeakeasyMetadata()
  queryParams: UsersListFollowersForUserQueryParams;
}


export class UsersListFollowersForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.SimpleUser })
  simpleUsers?: shared.SimpleUser[];
}
