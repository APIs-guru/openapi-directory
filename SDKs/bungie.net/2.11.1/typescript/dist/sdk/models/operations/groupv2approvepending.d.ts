import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GroupV2ApprovePendingPathParams extends SpeakeasyBase {
    groupId: number;
    membershipId: number;
    membershipType: number;
}
export declare class GroupV2ApprovePendingSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GroupV2ApprovePendingRequest extends SpeakeasyBase {
    pathParams: GroupV2ApprovePendingPathParams;
    security: GroupV2ApprovePendingSecurity;
}
export declare class GroupV2ApprovePendingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
