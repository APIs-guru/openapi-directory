import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GroupV2GetAdminsAndFounderOfGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;
}


export class GroupV2GetAdminsAndFounderOfGroupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentpage" })
  currentpage: number;
}


export class GroupV2GetAdminsAndFounderOfGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupV2GetAdminsAndFounderOfGroupPathParams;

  @SpeakeasyMetadata()
  queryParams: GroupV2GetAdminsAndFounderOfGroupQueryParams;
}


export class GroupV2GetAdminsAndFounderOfGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
