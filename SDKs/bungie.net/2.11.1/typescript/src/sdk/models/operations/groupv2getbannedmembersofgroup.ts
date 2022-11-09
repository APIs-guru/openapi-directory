import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroupV2GetBannedMembersOfGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;
}


export class GroupV2GetBannedMembersOfGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=currentpage" })
  currentpage: number;
}


export class GroupV2GetBannedMembersOfGroupSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GroupV2GetBannedMembersOfGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupV2GetBannedMembersOfGroupPathParams;

  @Metadata()
  queryParams: GroupV2GetBannedMembersOfGroupQueryParams;

  @Metadata()
  security: GroupV2GetBannedMembersOfGroupSecurity;
}


export class GroupV2GetBannedMembersOfGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
