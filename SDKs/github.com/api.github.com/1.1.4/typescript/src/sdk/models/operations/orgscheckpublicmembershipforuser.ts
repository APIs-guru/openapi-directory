import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrgsCheckPublicMembershipForUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class OrgsCheckPublicMembershipForUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OrgsCheckPublicMembershipForUserPathParams;
}


export class OrgsCheckPublicMembershipForUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
