import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UsersGetByUsernamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class UsersGetByUsernameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UsersGetByUsernamePathParams;
}


export class UsersGetByUsernameResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  usersGetByUsername200ApplicationJsonOneOf?: any;
}
