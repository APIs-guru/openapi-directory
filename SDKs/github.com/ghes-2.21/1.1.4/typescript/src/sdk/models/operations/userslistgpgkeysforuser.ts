import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UsersListGpgKeysForUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class UsersListGpgKeysForUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class UsersListGpgKeysForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsersListGpgKeysForUserPathParams;

  @SpeakeasyMetadata()
  queryParams: UsersListGpgKeysForUserQueryParams;
}


export class UsersListGpgKeysForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.GpgKey })
  gpgKeys?: shared.GpgKey[];
}
