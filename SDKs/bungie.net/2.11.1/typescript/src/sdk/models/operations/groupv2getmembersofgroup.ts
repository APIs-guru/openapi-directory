import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GroupV2GetMembersOfGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;
}


export class GroupV2GetMembersOfGroupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentpage" })
  currentpage: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=memberType" })
  memberType?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nameSearch" })
  nameSearch?: string;
}


export class GroupV2GetMembersOfGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupV2GetMembersOfGroupPathParams;

  @SpeakeasyMetadata()
  queryParams: GroupV2GetMembersOfGroupQueryParams;
}


export class GroupV2GetMembersOfGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
