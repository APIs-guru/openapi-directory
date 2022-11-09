import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UsersListGpgKeysForUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class UsersListGpgKeysForUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class UsersListGpgKeysForUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UsersListGpgKeysForUserPathParams;

  @Metadata()
  queryParams: UsersListGpgKeysForUserQueryParams;
}


export class UsersListGpgKeysForUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.GpgKey })
  gpgKeys?: shared.GpgKey[];
}
