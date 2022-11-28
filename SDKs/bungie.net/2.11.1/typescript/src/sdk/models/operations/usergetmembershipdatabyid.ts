import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserGetMembershipDataByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipId" })
  membershipId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class UserGetMembershipDataByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserGetMembershipDataByIdPathParams;
}


export class UserGetMembershipDataByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
