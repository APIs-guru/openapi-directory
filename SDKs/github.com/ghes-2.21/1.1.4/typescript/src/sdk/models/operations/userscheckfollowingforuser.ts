import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UsersCheckFollowingForUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=target_user" })
  targetUser: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class UsersCheckFollowingForUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UsersCheckFollowingForUserPathParams;
}


export class UsersCheckFollowingForUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
