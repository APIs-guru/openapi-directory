import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GroupV2GetGroupByNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupName" })
  groupName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupType" })
  groupType: number;
}


export class GroupV2GetGroupByNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupV2GetGroupByNamePathParams;
}


export class GroupV2GetGroupByNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
