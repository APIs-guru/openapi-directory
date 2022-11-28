import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GroupV2AbdicateFoundershipPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=founderIdNew" })
  founderIdNew: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class GroupV2AbdicateFoundershipRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupV2AbdicateFoundershipPathParams;
}


export class GroupV2AbdicateFoundershipResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
