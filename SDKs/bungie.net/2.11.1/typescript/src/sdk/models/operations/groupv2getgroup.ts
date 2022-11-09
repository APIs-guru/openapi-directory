import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GroupV2GetGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;
}


export class GroupV2GetGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupV2GetGroupPathParams;
}


export class GroupV2GetGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
