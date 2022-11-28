import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UsersCheckFollowingForUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target_user" })
  targetUser: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class UsersCheckFollowingForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsersCheckFollowingForUserPathParams;
}


export class UsersCheckFollowingForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
