import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroupV2GetUserClanInviteSettingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mType" })
  mType: number;
}


export class GroupV2GetUserClanInviteSettingSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GroupV2GetUserClanInviteSettingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupV2GetUserClanInviteSettingPathParams;

  @Metadata()
  security: GroupV2GetUserClanInviteSettingSecurity;
}


export class GroupV2GetUserClanInviteSettingResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
