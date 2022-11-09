import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroupV2DenyPendingForListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;
}


export class GroupV2DenyPendingForListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GroupV2DenyPendingForListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupV2DenyPendingForListPathParams;

  @Metadata()
  security: GroupV2DenyPendingForListSecurity;
}


export class GroupV2DenyPendingForListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
