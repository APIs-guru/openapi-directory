import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroupV2ApprovePendingForListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;
}


export class GroupV2ApprovePendingForListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GroupV2ApprovePendingForListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupV2ApprovePendingForListPathParams;

  @Metadata()
  security: GroupV2ApprovePendingForListSecurity;
}


export class GroupV2ApprovePendingForListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
