import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UsersCheckPersonIsFollowedByAuthenticatedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class UsersCheckPersonIsFollowedByAuthenticatedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UsersCheckPersonIsFollowedByAuthenticatedPathParams;
}


export class UsersCheckPersonIsFollowedByAuthenticatedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;
}
