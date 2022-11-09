import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GroupV2EditClanBannerPathParams extends SpeakeasyBase {
    groupId: number;
}
export declare class GroupV2EditClanBannerSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GroupV2EditClanBannerRequest extends SpeakeasyBase {
    pathParams: GroupV2EditClanBannerPathParams;
    security: GroupV2EditClanBannerSecurity;
}
export declare class GroupV2EditClanBannerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
