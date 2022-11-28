import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GroupV2GetUserClanInviteSettingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mType" })
  mType: number;
}


export class GroupV2GetUserClanInviteSettingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GroupV2GetUserClanInviteSettingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupV2GetUserClanInviteSettingPathParams;

  @SpeakeasyMetadata()
  security: GroupV2GetUserClanInviteSettingSecurity;
}


export class GroupV2GetUserClanInviteSettingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
