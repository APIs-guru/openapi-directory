import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GroupV2ApproveAllPendingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;
}


export class GroupV2ApproveAllPendingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GroupV2ApproveAllPendingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupV2ApproveAllPendingPathParams;

  @SpeakeasyMetadata()
  security: GroupV2ApproveAllPendingSecurity;
}


export class GroupV2ApproveAllPendingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
