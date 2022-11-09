import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GroupV2GetGroupByNamePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupName" })
  groupName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupType" })
  groupType: number;
}


export class GroupV2GetGroupByNameRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupV2GetGroupByNamePathParams;
}


export class GroupV2GetGroupByNameResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
