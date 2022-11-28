import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UsersListFollowingForUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class UsersListFollowingForUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class UsersListFollowingForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsersListFollowingForUserPathParams;

  @SpeakeasyMetadata()
  queryParams: UsersListFollowingForUserQueryParams;
}


export class UsersListFollowingForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.SimpleUser })
  simpleUsers?: shared.SimpleUser[];
}
