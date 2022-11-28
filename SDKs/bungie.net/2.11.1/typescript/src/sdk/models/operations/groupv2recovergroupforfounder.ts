import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GroupV2RecoverGroupForFounderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupType" })
  groupType: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipId" })
  membershipId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class GroupV2RecoverGroupForFounderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupV2RecoverGroupForFounderPathParams;
}


export class GroupV2RecoverGroupForFounderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
