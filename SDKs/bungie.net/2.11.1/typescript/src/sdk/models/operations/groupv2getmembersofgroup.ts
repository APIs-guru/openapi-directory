import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GroupV2GetMembersOfGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;
}


export class GroupV2GetMembersOfGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=currentpage" })
  currentpage: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=memberType" })
  memberType?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nameSearch" })
  nameSearch?: string;
}


export class GroupV2GetMembersOfGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupV2GetMembersOfGroupPathParams;

  @Metadata()
  queryParams: GroupV2GetMembersOfGroupQueryParams;
}


export class GroupV2GetMembersOfGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
