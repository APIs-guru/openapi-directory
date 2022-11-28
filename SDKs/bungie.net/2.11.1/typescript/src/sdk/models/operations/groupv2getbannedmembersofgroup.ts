import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GroupV2GetBannedMembersOfGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;
}


export class GroupV2GetBannedMembersOfGroupQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentpage" })
  currentpage: number;
}


export class GroupV2GetBannedMembersOfGroupSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GroupV2GetBannedMembersOfGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupV2GetBannedMembersOfGroupPathParams;

  @SpeakeasyMetadata()
  queryParams: GroupV2GetBannedMembersOfGroupQueryParams;

  @SpeakeasyMetadata()
  security: GroupV2GetBannedMembersOfGroupSecurity;
}


export class GroupV2GetBannedMembersOfGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
