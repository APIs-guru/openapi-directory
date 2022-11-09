import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroupV2EditGroupMembershipPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=memberType" })
  memberType: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=membershipId" })
  membershipId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class GroupV2EditGroupMembershipSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GroupV2EditGroupMembershipRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupV2EditGroupMembershipPathParams;

  @Metadata()
  security: GroupV2EditGroupMembershipSecurity;
}


export class GroupV2EditGroupMembershipResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
