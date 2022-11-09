import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GroupV2GetGroupsForMemberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=filter" })
  filter: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupType" })
  groupType: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=membershipId" })
  membershipId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class GroupV2GetGroupsForMemberRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupV2GetGroupsForMemberPathParams;
}


export class GroupV2GetGroupsForMemberResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
