import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroupV2ApproveAllPendingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;
}


export class GroupV2ApproveAllPendingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GroupV2ApproveAllPendingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupV2ApproveAllPendingPathParams;

  @Metadata()
  security: GroupV2ApproveAllPendingSecurity;
}


export class GroupV2ApproveAllPendingResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
