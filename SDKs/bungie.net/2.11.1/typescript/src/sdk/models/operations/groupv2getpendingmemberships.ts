import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GroupV2GetPendingMembershipsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;
}


export class GroupV2GetPendingMembershipsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentpage" })
  currentpage: number;
}


export class GroupV2GetPendingMembershipsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GroupV2GetPendingMembershipsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupV2GetPendingMembershipsPathParams;

  @SpeakeasyMetadata()
  queryParams: GroupV2GetPendingMembershipsQueryParams;

  @SpeakeasyMetadata()
  security: GroupV2GetPendingMembershipsSecurity;
}


export class GroupV2GetPendingMembershipsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
