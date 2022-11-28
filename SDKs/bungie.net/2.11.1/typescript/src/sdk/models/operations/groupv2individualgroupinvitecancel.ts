import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GroupV2IndividualGroupInviteCancelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipId" })
  membershipId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=membershipType" })
  membershipType: number;
}


export class GroupV2IndividualGroupInviteCancelSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GroupV2IndividualGroupInviteCancelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupV2IndividualGroupInviteCancelPathParams;

  @SpeakeasyMetadata()
  security: GroupV2IndividualGroupInviteCancelSecurity;
}


export class GroupV2IndividualGroupInviteCancelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
