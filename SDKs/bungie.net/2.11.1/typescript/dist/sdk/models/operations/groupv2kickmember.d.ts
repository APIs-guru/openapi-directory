import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GroupV2KickMemberPathParams extends SpeakeasyBase {
    groupId: number;
    membershipId: number;
    membershipType: number;
}
export declare class GroupV2KickMemberSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GroupV2KickMemberRequest extends SpeakeasyBase {
    pathParams: GroupV2KickMemberPathParams;
    security: GroupV2KickMemberSecurity;
}
export declare class GroupV2KickMemberResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
