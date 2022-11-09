import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroupV2GetPendingMembershipsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;
}


export class GroupV2GetPendingMembershipsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=currentpage" })
  currentpage: number;
}


export class GroupV2GetPendingMembershipsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GroupV2GetPendingMembershipsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupV2GetPendingMembershipsPathParams;

  @Metadata()
  queryParams: GroupV2GetPendingMembershipsQueryParams;

  @Metadata()
  security: GroupV2GetPendingMembershipsSecurity;
}


export class GroupV2GetPendingMembershipsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
