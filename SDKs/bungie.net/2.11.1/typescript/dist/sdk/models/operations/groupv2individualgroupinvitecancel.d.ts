import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GroupV2IndividualGroupInviteCancelPathParams extends SpeakeasyBase {
    groupId: number;
    membershipId: number;
    membershipType: number;
}
export declare class GroupV2IndividualGroupInviteCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GroupV2IndividualGroupInviteCancelRequest extends SpeakeasyBase {
    pathParams: GroupV2IndividualGroupInviteCancelPathParams;
    security: GroupV2IndividualGroupInviteCancelSecurity;
}
export declare class GroupV2IndividualGroupInviteCancelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
