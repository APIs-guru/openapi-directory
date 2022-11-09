import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroupV2DenyAllPendingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;
}


export class GroupV2DenyAllPendingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GroupV2DenyAllPendingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupV2DenyAllPendingPathParams;

  @Metadata()
  security: GroupV2DenyAllPendingSecurity;
}


export class GroupV2DenyAllPendingResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
