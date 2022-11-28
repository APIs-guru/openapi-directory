import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UsersListPublicKeysForUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class UsersListPublicKeysForUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class UsersListPublicKeysForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsersListPublicKeysForUserPathParams;

  @SpeakeasyMetadata()
  queryParams: UsersListPublicKeysForUserQueryParams;
}


export class UsersListPublicKeysForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.KeySimple })
  keySimples?: shared.KeySimple[];
}
