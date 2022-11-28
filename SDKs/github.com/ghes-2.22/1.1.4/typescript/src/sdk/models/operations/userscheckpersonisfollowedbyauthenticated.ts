import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UsersCheckPersonIsFollowedByAuthenticatedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class UsersCheckPersonIsFollowedByAuthenticatedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UsersCheckPersonIsFollowedByAuthenticatedPathParams;
}


export class UsersCheckPersonIsFollowedByAuthenticatedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;
}
