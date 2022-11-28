import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GroupV2ApprovePendingForListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;
}


export class GroupV2ApprovePendingForListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GroupV2ApprovePendingForListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupV2ApprovePendingForListPathParams;

  @SpeakeasyMetadata()
  security: GroupV2ApprovePendingForListSecurity;
}


export class GroupV2ApprovePendingForListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
