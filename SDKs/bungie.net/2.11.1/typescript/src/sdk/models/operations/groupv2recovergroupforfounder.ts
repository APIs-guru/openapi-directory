import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GroupV2RecoverGroupForFounderPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupType" })
  groupType: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=membershipId" })
  membershipId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class GroupV2RecoverGroupForFounderRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupV2RecoverGroupForFounderPathParams;
}


export class GroupV2RecoverGroupForFounderResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
