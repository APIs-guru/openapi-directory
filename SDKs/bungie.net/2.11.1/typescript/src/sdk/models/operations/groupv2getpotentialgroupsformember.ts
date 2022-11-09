import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GroupV2GetPotentialGroupsForMemberPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=filter" })
  filter: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupType" })
  groupType: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=membershipId" })
  membershipId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class GroupV2GetPotentialGroupsForMemberRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupV2GetPotentialGroupsForMemberPathParams;
}


export class GroupV2GetPotentialGroupsForMemberResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
