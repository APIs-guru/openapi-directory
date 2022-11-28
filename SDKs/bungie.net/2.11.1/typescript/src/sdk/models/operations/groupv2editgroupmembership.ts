import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GroupV2EditGroupMembershipPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=memberType" })
  memberType: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipId" })
  membershipId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class GroupV2EditGroupMembershipSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GroupV2EditGroupMembershipRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupV2EditGroupMembershipPathParams;

  @SpeakeasyMetadata()
  security: GroupV2EditGroupMembershipSecurity;
}


export class GroupV2EditGroupMembershipResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
