import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GroupV2GetPotentialGroupsForMemberPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=filter" })
  filter: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupType" })
  groupType: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipId" })
  membershipId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class GroupV2GetPotentialGroupsForMemberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupV2GetPotentialGroupsForMemberPathParams;
}


export class GroupV2GetPotentialGroupsForMemberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
