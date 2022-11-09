import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GroupV2AbdicateFoundershipPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=founderIdNew" })
  founderIdNew: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class GroupV2AbdicateFoundershipRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupV2AbdicateFoundershipPathParams;
}


export class GroupV2AbdicateFoundershipResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
