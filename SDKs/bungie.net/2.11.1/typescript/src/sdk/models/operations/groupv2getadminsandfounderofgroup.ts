import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GroupV2GetAdminsAndFounderOfGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;
}


export class GroupV2GetAdminsAndFounderOfGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=currentpage" })
  currentpage: number;
}


export class GroupV2GetAdminsAndFounderOfGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupV2GetAdminsAndFounderOfGroupPathParams;

  @Metadata()
  queryParams: GroupV2GetAdminsAndFounderOfGroupQueryParams;
}


export class GroupV2GetAdminsAndFounderOfGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
