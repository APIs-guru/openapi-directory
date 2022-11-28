import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupV2EditGroupMembershipPathParams extends SpeakeasyBase {
    groupId: number;
    memberType: number;
    membershipId: number;
    membershipType: number;
}
export declare class GroupV2EditGroupMembershipSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GroupV2EditGroupMembershipRequest extends SpeakeasyBase {
    pathParams: GroupV2EditGroupMembershipPathParams;
    security: GroupV2EditGroupMembershipSecurity;
}
export declare class GroupV2EditGroupMembershipResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
