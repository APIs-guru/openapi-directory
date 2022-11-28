import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupV2UnbanMemberPathParams extends SpeakeasyBase {
    groupId: number;
    membershipId: number;
    membershipType: number;
}
export declare class GroupV2UnbanMemberSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GroupV2UnbanMemberRequest extends SpeakeasyBase {
    pathParams: GroupV2UnbanMemberPathParams;
    security: GroupV2UnbanMemberSecurity;
}
export declare class GroupV2UnbanMemberResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
