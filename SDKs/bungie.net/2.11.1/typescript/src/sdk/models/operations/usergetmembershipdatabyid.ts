import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserGetMembershipDataByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=membershipId" })
  membershipId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class UserGetMembershipDataByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UserGetMembershipDataByIdPathParams;
}


export class UserGetMembershipDataByIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
