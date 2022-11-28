import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UsersGetByUsernamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class UsersGetByUsernameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsersGetByUsernamePathParams;
}


export class UsersGetByUsernameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  usersGetByUsername200ApplicationJsonOneOf?: any;

  @SpeakeasyMetadata()
  usersGetByUsername202ApplicationJsonObject?: Map<string, any>;
}
