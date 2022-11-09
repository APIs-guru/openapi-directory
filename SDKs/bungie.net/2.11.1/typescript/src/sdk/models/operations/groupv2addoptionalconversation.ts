import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroupV2AddOptionalConversationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;
}


export class GroupV2AddOptionalConversationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GroupV2AddOptionalConversationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupV2AddOptionalConversationPathParams;

  @Metadata()
  security: GroupV2AddOptionalConversationSecurity;
}


export class GroupV2AddOptionalConversationResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
