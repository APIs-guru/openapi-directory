import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GroupV2AddOptionalConversationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;
}


export class GroupV2AddOptionalConversationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GroupV2AddOptionalConversationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupV2AddOptionalConversationPathParams;

  @SpeakeasyMetadata()
  security: GroupV2AddOptionalConversationSecurity;
}


export class GroupV2AddOptionalConversationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
