import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrgsCheckMembershipForUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class OrgsCheckMembershipForUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OrgsCheckMembershipForUserPathParams;
}


export class OrgsCheckMembershipForUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
