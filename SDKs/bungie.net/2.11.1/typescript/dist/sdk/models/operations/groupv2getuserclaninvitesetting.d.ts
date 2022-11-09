import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GroupV2GetUserClanInviteSettingPathParams extends SpeakeasyBase {
    mType: number;
}
export declare class GroupV2GetUserClanInviteSettingSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GroupV2GetUserClanInviteSettingRequest extends SpeakeasyBase {
    pathParams: GroupV2GetUserClanInviteSettingPathParams;
    security: GroupV2GetUserClanInviteSettingSecurity;
}
export declare class GroupV2GetUserClanInviteSettingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
