import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupV2IndividualGroupInvitePathParams extends SpeakeasyBase {
    groupId: number;
    membershipId: number;
    membershipType: number;
}
export declare class GroupV2IndividualGroupInviteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GroupV2IndividualGroupInviteRequest extends SpeakeasyBase {
    pathParams: GroupV2IndividualGroupInvitePathParams;
    security: GroupV2IndividualGroupInviteSecurity;
}
export declare class GroupV2IndividualGroupInviteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
