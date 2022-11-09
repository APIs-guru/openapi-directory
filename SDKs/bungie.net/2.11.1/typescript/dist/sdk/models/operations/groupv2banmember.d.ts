import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GroupV2BanMemberPathParams extends SpeakeasyBase {
    groupId: number;
    membershipId: number;
    membershipType: number;
}
export declare class GroupV2BanMemberSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GroupV2BanMemberRequest extends SpeakeasyBase {
    pathParams: GroupV2BanMemberPathParams;
    security: GroupV2BanMemberSecurity;
}
export declare class GroupV2BanMemberResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
