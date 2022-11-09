import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroupV2BanMemberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=membershipId" })
  membershipId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class GroupV2BanMemberSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GroupV2BanMemberRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupV2BanMemberPathParams;

  @Metadata()
  security: GroupV2BanMemberSecurity;
}


export class GroupV2BanMemberResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
